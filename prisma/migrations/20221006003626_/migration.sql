-- CreateTable
CREATE TABLE "predicts" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "matchId" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,

    CONSTRAINT "predicts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "predicts_playerId_matchId_key" ON "predicts"("playerId", "matchId");

-- AddForeignKey
ALTER TABLE "predicts" ADD CONSTRAINT "predicts_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "gamesOnLeagues"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "predicts" ADD CONSTRAINT "predicts_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
