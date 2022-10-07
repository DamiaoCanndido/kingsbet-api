-- DropForeignKey
ALTER TABLE "matches" DROP CONSTRAINT "matches_gameId_fkey";

-- DropForeignKey
ALTER TABLE "matches" DROP CONSTRAINT "matches_leagueId_fkey";

-- DropForeignKey
ALTER TABLE "players" DROP CONSTRAINT "players_leagueId_fkey";

-- DropForeignKey
ALTER TABLE "players" DROP CONSTRAINT "players_userId_fkey";

-- DropForeignKey
ALTER TABLE "predicts" DROP CONSTRAINT "predicts_matchId_fkey";

-- DropForeignKey
ALTER TABLE "predicts" DROP CONSTRAINT "predicts_playerId_fkey";

-- AlterTable
ALTER TABLE "predicts" ADD COLUMN     "awayPredict" INTEGER,
ADD COLUMN     "homePredict" INTEGER;

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_leagueId_fkey" FOREIGN KEY ("leagueId") REFERENCES "leagues"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "players" ADD CONSTRAINT "players_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "players" ADD CONSTRAINT "players_leagueId_fkey" FOREIGN KEY ("leagueId") REFERENCES "leagues"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "predicts" ADD CONSTRAINT "predicts_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "matches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "predicts" ADD CONSTRAINT "predicts_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "players"("id") ON DELETE CASCADE ON UPDATE CASCADE;
