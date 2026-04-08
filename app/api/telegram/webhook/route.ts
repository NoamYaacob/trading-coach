import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendTelegramMessage } from "@/lib/telegram";

function buildReply(
  messageText: string,
  riskRules: { stopAfterLosses: number; dailyLossLimit: number } | null
): string {
  const text = messageText.toLowerCase();

  const emotionalKeywords = ["fomo", "להחזיר", "נקמה", "לחוץ", "עצבני"];
  if (emotionalKeywords.some((kw) => text.includes(kw.toLowerCase()))) {
    return "עצור. זה נראה רגשי, לא מתוכנן. מה הסטאפ? איפה הסטופ? אם אין סטאפ ברור, אין עסקה.";
  }

  if (text.includes("צ'ק אין")) {
    const stopAfterLosses = riskRules?.stopAfterLosses ?? "?";
    const dailyLossLimit = riskRules?.dailyLossLimit ?? "?";
    return `צ'ק אין קצר:
1. מה הסטאפ המרכזי שאתה מחפש היום?
2. מה יגרום לך לא להיכנס?
3. אתה עוצר אחרי ${stopAfterLosses} הפסדים או ${dailyLossLimit}$ הפסד יומי. אתה מיושר לזה?`;
  }

  if (text.includes("סכם לי את היום")) {
    return `סיכום קצר:
כמה עסקאות לקחת?
סיימת ברווח או הפסד?
מה הייתה הטעות המרכזית?
פעלת לפי התוכנית?`;
  }

  return "אני איתך. כתוב לי: צ'ק אין / יש לי FOMO / סכם לי את היום";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const messageText: string | undefined = body.message?.text;
    const telegramUserId: string | undefined =
      body.message?.from?.id != null ? String(body.message.from.id) : undefined;
    const telegramChatId: string | undefined =
      body.message?.chat?.id != null ? String(body.message.chat.id) : undefined;

    if (!messageText) {
      return NextResponse.json({ ok: true, ignored: true });
    }

    // /connect flow
    if (messageText.startsWith("/connect")) {
      const email = messageText.slice("/connect".length).trim();

      if (!email) {
        await sendTelegramMessage(telegramChatId!, "שלח: /connect your-email@example.com");
        return NextResponse.json({ ok: false, error: "Email missing" });
      }

      const user = await prisma.user.findUnique({ where: { email } });

      if (!user) {
        await sendTelegramMessage(telegramChatId!, "לא נמצא משתמש עם המייל הזה.");
        return NextResponse.json({ ok: false, error: "User not found" });
      }

      await prisma.telegramConnection.upsert({
        where: { userId: user.id },
        update: {
          telegramUserId: telegramUserId!,
          telegramChatId: telegramChatId!,
          status: "connected",
          botConnectedAt: new Date(),
        },
        create: {
          userId: user.id,
          telegramUserId: telegramUserId!,
          telegramChatId: telegramChatId!,
          status: "connected",
          botConnectedAt: new Date(),
        },
      });

      await sendTelegramMessage(telegramChatId!, "החיבור הצליח. מעכשיו אני מזהה אותך.");

      return NextResponse.json({ ok: true, linked: true, userId: user.id });
    }

    // Coach reply flow
    const telegramConnection = await prisma.telegramConnection.findFirst({
      where: { telegramUserId, telegramChatId },
    });

    if (!telegramConnection) {
      await sendTelegramMessage(
        telegramChatId!,
        "כדי להתחבר, שלח: /connect your-email@example.com"
      );
      return NextResponse.json(
        { ok: false, error: "Telegram connection not found" },
        { status: 404 }
      );
    }

    const { userId } = telegramConnection;

    const [, riskRules] = await Promise.all([
      prisma.traderProfile.findUnique({ where: { userId } }),
      prisma.riskRules.findUnique({ where: { userId } }),
      prisma.mentalProfile.findUnique({ where: { userId } }),
      prisma.coachingPreferences.findUnique({ where: { userId } }),
    ]);

    const reply = buildReply(messageText, riskRules);

    await sendTelegramMessage(telegramChatId!, reply);

    return NextResponse.json({ ok: true, messageText, userId, reply, sent: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
