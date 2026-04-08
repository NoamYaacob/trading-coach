import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();

  const {
    email,
    tradingStyle,
    experienceYears,
    tradingDays,
    tradingSession,
    accountSize,
    dailyLossLimit,
    riskPerTrade,
    maxTradesPerDay,
    stopAfterLosses,
    mainWeaknesses,
    tiltTrigger,
    tiltThoughts,
    coachingTone,
    interruptionStyle,
    responseStyle,
    premarketCheckinEnabled,
    postmarketReviewEnabled,
    checkinFormat,
    reviewFocus,
    newsAlertsEnabled,
    preNewsMinutes,
    highImpactOnly,
  } = body;

  if (!email || typeof email !== "string") {
    return NextResponse.json(
      { ok: false, error: "email is required" },
      { status: 400 }
    );
  }

  const requiredFields = {
    tradingStyle,
    experienceYears,
    tradingDays,
    tradingSession,
    accountSize,
    dailyLossLimit,
    riskPerTrade,
    maxTradesPerDay,
    stopAfterLosses,
    mainWeaknesses,
    tiltTrigger,
    tiltThoughts,
    coachingTone,
    interruptionStyle,
    responseStyle,
    checkinFormat,
    reviewFocus,
  };

  for (const [field, value] of Object.entries(requiredFields)) {
    if (value === undefined || value === null || value === "") {
      return NextResponse.json(
        { ok: false, error: `${field} is required` },
        { status: 400 }
      );
    }
  }

  const user = await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      email,
      role: "user",
      subscriptionStatus: "INACTIVE",
    },
  });

  const [traderProfile, riskRules, mentalProfile, coachingPreferences] =
    await Promise.all([
      prisma.traderProfile.upsert({
        where: { userId: user.id },
        update: {
          tradingStyle,
          experienceYears: Number(experienceYears),
          tradingDays,
          tradingSession,
        },
        create: {
          userId: user.id,
          market: "FUTURES",
          tradingStyle,
          experienceYears: Number(experienceYears),
          tradingDays,
          tradingSession,
          timezone: "Asia/Jerusalem",
        },
      }),
      prisma.riskRules.upsert({
        where: { userId: user.id },
        update: {
          accountSize: Number(accountSize),
          dailyLossLimit: Number(dailyLossLimit),
          riskPerTrade: Number(riskPerTrade),
          maxTradesPerDay: Number(maxTradesPerDay),
          stopAfterLosses: Number(stopAfterLosses),
        },
        create: {
          userId: user.id,
          accountSize: Number(accountSize),
          dailyLossLimit: Number(dailyLossLimit),
          riskPerTrade: Number(riskPerTrade),
          maxTradesPerDay: Number(maxTradesPerDay),
          stopAfterLosses: Number(stopAfterLosses),
        },
      }),
      prisma.mentalProfile.upsert({
        where: { userId: user.id },
        update: {
          mainWeaknesses,
          tiltTrigger,
          tiltThoughts,
          coachingTone,
          interruptionStyle,
          responseStyle,
        },
        create: {
          userId: user.id,
          mainWeaknesses,
          tiltTrigger,
          tiltThoughts,
          coachingTone,
          interruptionStyle,
          responseStyle,
        },
      }),
      prisma.coachingPreferences.upsert({
        where: { userId: user.id },
        update: {
          premarketCheckinEnabled: Boolean(premarketCheckinEnabled),
          postmarketReviewEnabled: Boolean(postmarketReviewEnabled),
          checkinFormat,
          reviewFocus,
          newsAlertsEnabled: Boolean(newsAlertsEnabled),
          preNewsMinutes: Number(preNewsMinutes),
          highImpactOnly: Boolean(highImpactOnly),
        },
        create: {
          userId: user.id,
          premarketCheckinEnabled: Boolean(premarketCheckinEnabled),
          postmarketReviewEnabled: Boolean(postmarketReviewEnabled),
          checkinFormat,
          reviewFocus,
          newsAlertsEnabled: Boolean(newsAlertsEnabled),
          preNewsMinutes: Number(preNewsMinutes),
          highImpactOnly: Boolean(highImpactOnly),
        },
      }),
    ]);

  return NextResponse.json({
    ok: true,
    user,
    traderProfile,
    riskRules,
    mentalProfile,
    coachingPreferences,
  });
}
