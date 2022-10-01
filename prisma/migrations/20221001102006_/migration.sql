/*
  Warnings:

  - You are about to drop the `gamesOnLeagues` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "gamesOnLeagues" DROP CONSTRAINT "gamesOnLeagues_gameId_fkey";

-- DropForeignKey
ALTER TABLE "gamesOnLeagues" DROP CONSTRAINT "gamesOnLeagues_leagueId_fkey";

-- DropTable
DROP TABLE "gamesOnLeagues";
