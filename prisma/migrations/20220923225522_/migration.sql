/*
  Warnings:

  - You are about to drop the `keyings` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "keyings";

-- CreateTable
CREATE TABLE "phases" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "order" INTEGER NOT NULL,
    "name" TEXT,
    "leagueId" TEXT NOT NULL,
    "matchesAmount" INTEGER NOT NULL,
    "fullMatches" INTEGER NOT NULL DEFAULT 0,
    "isPlayOffs" BOOLEAN NOT NULL DEFAULT false,
    "playerKickAmount" INTEGER NOT NULL DEFAULT 0,
    "isAvailable" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "phases_pkey" PRIMARY KEY ("id")
);
