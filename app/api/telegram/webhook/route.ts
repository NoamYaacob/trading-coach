import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

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

  return NextResponse.json({
    ok: true,
    messageText,
    telegramUserId,
    telegramChatId,
    userId: telegramConnection.userId,
  });
}
