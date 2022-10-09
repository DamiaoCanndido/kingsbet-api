-- AddForeignKey
ALTER TABLE "predicts" ADD CONSTRAINT "predicts_leagueId_fkey" FOREIGN KEY ("leagueId") REFERENCES "leagues"("id") ON DELETE CASCADE ON UPDATE CASCADE;
