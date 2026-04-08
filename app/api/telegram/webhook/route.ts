import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

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
  const body = await request.json();

  const messageText: string | undefined = body.message?.text;
  const telegramUserId: string | undefined =
    body.message?.from?.id != null ? String(body.message.from.id) : undefined;
  const telegramChatId: string | undefined =
    body.message?.chat?.id != null ? String(body.message.chat.id) : undefined;

  if (!messageText) {
    return NextResponse.json({ ok: true, ignored: true });
  }

  const telegramConnection = await prisma.telegramConnection.findFirst({
    where: { telegramUserId, telegramChatId },
  });

  if (!telegramConnection) {
    return NextResponse.json(
      { ok: false, error: "Telegram connection not found" },
      { status: 404 }
    );
  }

  const { userId } = telegramConnection;

  const [traderProfile, riskRules, mentalProfile, coachingPreferences] =
    await Promise.all([
      prisma.traderProfile.findUnique({ where: { userId } }),
      prisma.riskRules.findUnique({ where: { userId } }),
      prisma.mentalProfile.findUnique({ where: { userId } }),
      prisma.coachingPreferences.findUnique({ where: { userId } }),
    ]);

  const reply = buildReply(messageText, riskRules);

  return NextResponse.json({
    ok: true,
    messageText,
    userId,
    reply,
  });
}
