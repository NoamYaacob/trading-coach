-- CreateEnum
CREATE TYPE "SubscriptionStatus" AS ENUM ('INACTIVE', 'TRIALING', 'ACTIVE', 'PAST_DUE', 'CANCELED');

-- CreateEnum
CREATE TYPE "TradingStyle" AS ENUM ('SCALP', 'DAY_TRADING', 'SWING');

-- CreateEnum
CREATE TYPE "CoachingTone" AS ENUM ('TOUGH', 'DIRECT', 'CALM_SHARP');

-- CreateEnum
CREATE TYPE "ResponseStyle" AS ENUM ('VERY_SHORT', 'SHORT_WITH_EXPLANATION');

-- CreateEnum
CREATE TYPE "AlertType" AS ENUM ('DAILY_BRIEFING', 'PRE_NEWS');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT,
    "role" TEXT NOT NULL DEFAULT 'user',
    "subscriptionStatus" "SubscriptionStatus" NOT NULL DEFAULT 'INACTIVE',
    "stripeCustomerId" TEXT,
    "stripeSubscriptionId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TelegramConnection" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "telegramUserId" TEXT NOT NULL,
    "telegramChatId" TEXT NOT NULL,
    "botConnectedAt" TIMESTAMP(3),
    "status" TEXT NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TelegramConnection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TraderProfile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "market" TEXT NOT NULL,
    "tradingStyle" "TradingStyle" NOT NULL,
    "experienceYears" INTEGER NOT NULL,
    "tradingDays" TEXT NOT NULL,
    "tradingSession" TEXT NOT NULL,
    "timezone" TEXT NOT NULL DEFAULT 'Asia/Jerusalem',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TraderProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RiskRules" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "accountSize" INTEGER NOT NULL,
    "dailyLossLimit" INTEGER NOT NULL,
    "riskPerTrade" INTEGER NOT NULL,
    "maxTradesPerDay" INTEGER NOT NULL,
    "stopAfterLosses" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RiskRules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TradingRules" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "allowedSetups" TEXT NOT NULL,
    "forbiddenConditions" TEXT NOT NULL,
    "requiredBeforeEntry" TEXT NOT NULL,
    "invalidationRules" TEXT NOT NULL,
    "allowedHours" TEXT NOT NULL,
    "forbiddenHours" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TradingRules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MentalProfile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "mainWeaknesses" TEXT NOT NULL,
    "tiltTrigger" TEXT NOT NULL,
    "tiltThoughts" TEXT NOT NULL,
    "coachingTone" "CoachingTone" NOT NULL,
    "interruptionStyle" TEXT NOT NULL,
    "responseStyle" "ResponseStyle" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MentalProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CoachingPreferences" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "premarketCheckinEnabled" BOOLEAN NOT NULL DEFAULT true,
    "postmarketReviewEnabled" BOOLEAN NOT NULL DEFAULT true,
    "checkinFormat" TEXT NOT NULL,
    "reviewFocus" TEXT NOT NULL,
    "newsAlertsEnabled" BOOLEAN NOT NULL DEFAULT true,
    "preNewsMinutes" INTEGER NOT NULL DEFAULT 10,
    "highImpactOnly" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CoachingPreferences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NewsEvent" (
    "id" TEXT NOT NULL,
    "providerEventId" TEXT,
    "title" TEXT NOT NULL,
    "startsAtUtc" TIMESTAMP(3) NOT NULL,
    "country" TEXT,
    "impactLevel" TEXT NOT NULL,
    "category" TEXT,
    "relevantMarkets" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NewsEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SentNewsAlert" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "newsEventId" TEXT NOT NULL,
    "alertType" "AlertType" NOT NULL,
    "sentAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SentNewsAlert_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CoachingLog" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "triggerType" TEXT NOT NULL,
    "inputText" TEXT NOT NULL,
    "outputText" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CoachingLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "TelegramConnection_userId_key" ON "TelegramConnection"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "TelegramConnection_telegramUserId_key" ON "TelegramConnection"("telegramUserId");

-- CreateIndex
CREATE UNIQUE INDEX "TelegramConnection_telegramChatId_key" ON "TelegramConnection"("telegramChatId");

-- CreateIndex
CREATE UNIQUE INDEX "TraderProfile_userId_key" ON "TraderProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "RiskRules_userId_key" ON "RiskRules"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "TradingRules_userId_key" ON "TradingRules"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "MentalProfile_userId_key" ON "MentalProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "CoachingPreferences_userId_key" ON "CoachingPreferences"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "NewsEvent_providerEventId_key" ON "NewsEvent"("providerEventId");

-- CreateIndex
CREATE UNIQUE INDEX "SentNewsAlert_userId_newsEventId_alertType_key" ON "SentNewsAlert"("userId", "newsEventId", "alertType");

-- AddForeignKey
ALTER TABLE "TelegramConnection" ADD CONSTRAINT "TelegramConnection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TraderProfile" ADD CONSTRAINT "TraderProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RiskRules" ADD CONSTRAINT "RiskRules_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TradingRules" ADD CONSTRAINT "TradingRules_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MentalProfile" ADD CONSTRAINT "MentalProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoachingPreferences" ADD CONSTRAINT "CoachingPreferences_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SentNewsAlert" ADD CONSTRAINT "SentNewsAlert_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SentNewsAlert" ADD CONSTRAINT "SentNewsAlert_newsEventId_fkey" FOREIGN KEY ("newsEventId") REFERENCES "NewsEvent"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoachingLog" ADD CONSTRAINT "CoachingLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
