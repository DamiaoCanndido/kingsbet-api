-- CreateTable
CREATE TABLE "GamesOnLeagues" (
    "gameId" TEXT NOT NULL,
    "leagueId" TEXT NOT NULL,

    CONSTRAINT "GamesOnLeagues_pkey" PRIMARY KEY ("gameId","leagueId")
);

-- AddForeignKey
ALTER TABLE "GamesOnLeagues" ADD CONSTRAINT "GamesOnLeagues_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GamesOnLeagues" ADD CONSTRAINT "GamesOnLeagues_leagueId_fkey" FOREIGN KEY ("leagueId") REFERENCES "leagues"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
