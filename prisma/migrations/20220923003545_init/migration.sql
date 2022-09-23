-- CreateEnum
CREATE TYPE "TeamType" AS ENUM ('CLUB', 'SELECTION');

-- CreateEnum
CREATE TYPE "ChampType" AS ENUM ('LEAGUE', 'CUP');

-- CreateEnum
CREATE TYPE "GroupType" AS ENUM ('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');

-- CreateEnum
CREATE TYPE "RoundType" AS ENUM ('Play_offs', 'Round_of_16', 'Quarter_finals', 'Semi_finals', 'Third_place', 'Final');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "cash" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "teams" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "shieldUrl" TEXT NOT NULL,
    "shieldKey" TEXT NOT NULL,
    "stadium" TEXT NOT NULL,
    "teamType" "TeamType" NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "teams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "champs" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "shieldUrl" TEXT NOT NULL,
    "shieldKey" TEXT NOT NULL,
    "champType" "ChampType" NOT NULL,

    CONSTRAINT "champs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "groups" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" "GroupType",
    "order" INTEGER NOT NULL,
    "champId" TEXT NOT NULL,

    CONSTRAINT "groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rounds" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" "RoundType",
    "order" INTEGER NOT NULL,
    "groupId" TEXT NOT NULL,
    "playOffs" BOOLEAN NOT NULL DEFAULT false,
    "numberGames" INTEGER NOT NULL,

    CONSTRAINT "rounds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "games" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "homeId" TEXT NOT NULL,
    "homeScore" INTEGER,
    "awayId" TEXT NOT NULL,
    "awayScore" INTEGER,
    "roundId" TEXT NOT NULL,
    "playOffs" BOOLEAN NOT NULL DEFAULT false,
    "homeKickScore" INTEGER,
    "awayKickScore" INTEGER,
    "start" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "games_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leagues" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "playersAmount" INTEGER NOT NULL,
    "playersAccepted" INTEGER NOT NULL DEFAULT 0,
    "keysAmount" INTEGER NOT NULL,
    "phasesAmount" INTEGER NOT NULL,
    "matchesAmount" INTEGER NOT NULL,
    "subscription" DOUBLE PRECISION NOT NULL,
    "isPrivate" BOOLEAN NOT NULL DEFAULT false,
    "start" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "leagues_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "keys" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "order" INTEGER NOT NULL,
    "name" TEXT,
    "leagueId" TEXT NOT NULL,
    "playersAmount" INTEGER NOT NULL,
    "finishedPhases" INTEGER NOT NULL DEFAULT 0,
    "phasesAmount" INTEGER NOT NULL,
    "isPlayOffs" BOOLEAN NOT NULL DEFAULT false,
    "playerKickAmount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "keys_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_name_key" ON "users"("name");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "teams_name_key" ON "teams"("name");

-- CreateIndex
CREATE UNIQUE INDEX "champs_name_key" ON "champs"("name");

-- AddForeignKey
ALTER TABLE "groups" ADD CONSTRAINT "groups_champId_fkey" FOREIGN KEY ("champId") REFERENCES "champs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rounds" ADD CONSTRAINT "rounds_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "games" ADD CONSTRAINT "games_homeId_fkey" FOREIGN KEY ("homeId") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "games" ADD CONSTRAINT "games_awayId_fkey" FOREIGN KEY ("awayId") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "games" ADD CONSTRAINT "games_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "rounds"("id") ON DELETE CASCADE ON UPDATE CASCADE;
