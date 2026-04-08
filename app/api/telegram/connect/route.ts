import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, telegramUserId, telegramChatId } = body;

  for (const [field, value] of Object.entries({ email, telegramUserId, telegramChatId })) {
    if (!value || typeof value !== "string") {
      return NextResponse.json(
        { ok: false, error: `${field} is required` },
        { status: 400 }
      );
    }
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return NextResponse.json(
      { ok: false, error: "User not found" },
      { status: 404 }
    );
  }

  const telegramConnection = await prisma.telegramConnection.upsert({
    where: { userId: user.id },
    update: {
      telegramUserId,
      telegramChatId,
      status: "connected",
      botConnectedAt: new Date(),
    },
    create: {
      userId: user.id,
      telegramUserId,
      telegramChatId,
      status: "connected",
      botConnectedAt: new Date(),
    },
  });

  return NextResponse.json({ ok: true, telegramConnection });
}
