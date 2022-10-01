/*
  Warnings:

  - You are about to drop the `GamesOnLeagues` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "GamesOnLeagues" DROP CONSTRAINT "GamesOnLeagues_gameId_fkey";

-- DropForeignKey
ALTER TABLE "GamesOnLeagues" DROP CONSTRAINT "GamesOnLeagues_leagueId_fkey";

-- DropTable
DROP TABLE "GamesOnLeagues";

-- CreateTable
CREATE TABLE "gamesOnLeagues" (
    "gameId" TEXT NOT NULL,
    "leagueId" TEXT NOT NULL,

    CONSTRAINT "gamesOnLeagues_pkey" PRIMARY KEY ("gameId","leagueId")
);

-- AddForeignKey
ALTER TABLE "gamesOnLeagues" ADD CONSTRAINT "gamesOnLeagues_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gamesOnLeagues" ADD CONSTRAINT "gamesOnLeagues_leagueId_fkey" FOREIGN KEY ("leagueId") REFERENCES "leagues"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
