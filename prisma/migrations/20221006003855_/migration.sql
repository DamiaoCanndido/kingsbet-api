/*
  Warnings:

  - You are about to drop the `gamesOnLeagues` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "gamesOnLeagues" DROP CONSTRAINT "gamesOnLeagues_gameId_fkey";

-- DropForeignKey
ALTER TABLE "gamesOnLeagues" DROP CONSTRAINT "gamesOnLeagues_leagueId_fkey";

-- DropForeignKey
ALTER TABLE "predicts" DROP CONSTRAINT "predicts_matchId_fkey";

-- DropTable
DROP TABLE "gamesOnLeagues";

-- CreateTable
CREATE TABLE "matches" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "gameId" TEXT NOT NULL,
    "leagueId" TEXT NOT NULL,

    CONSTRAINT "matches_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "matches_gameId_leagueId_key" ON "matches"("gameId", "leagueId");

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_leagueId_fkey" FOREIGN KEY ("leagueId") REFERENCES "leagues"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "predicts" ADD CONSTRAINT "predicts_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "matches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
