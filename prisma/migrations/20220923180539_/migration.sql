/*
  Warnings:

  - You are about to drop the `keys` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "keys";

-- CreateTable
CREATE TABLE "keyings" (
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

    CONSTRAINT "keyings_pkey" PRIMARY KEY ("id")
);
