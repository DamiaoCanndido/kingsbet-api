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
