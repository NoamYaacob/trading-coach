import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();
  const { email } = body;

  if (!email || typeof email !== "string") {
    return NextResponse.json(
      { ok: false, error: "Email is required" },
      { status: 400 }
    );
  }

  try {
    const user = await prisma.user.create({
      data: {
        email,
        role: "user",
        subscriptionStatus: "INACTIVE",
      },
    });
    return NextResponse.json({ ok: true, user });
  } catch (error: unknown) {
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      (error as { code: string }).code === "P2002"
    ) {
      return NextResponse.json(
        { ok: false, error: "Email already exists" },
        { status: 400 }
      );
    }
    throw error;
  }
}
