/*
  Warnings:

  - Added the required column `numberGames` to the `rounds` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "games" DROP CONSTRAINT "games_roundId_fkey";

-- DropForeignKey
ALTER TABLE "rounds" DROP CONSTRAINT "rounds_champId_fkey";

-- AlterTable
ALTER TABLE "games" ADD COLUMN     "awayKickScore" INTEGER,
ADD COLUMN     "groupId" TEXT,
ADD COLUMN     "homeKickScore" INTEGER,
ADD COLUMN     "playOffs" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "rounds" ADD COLUMN     "groupId" TEXT,
ADD COLUMN     "numberGames" INTEGER NOT NULL,
ADD COLUMN     "playOffs" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "groups" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "champId" TEXT NOT NULL,

    CONSTRAINT "groups_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "groups" ADD CONSTRAINT "groups_champId_fkey" FOREIGN KEY ("champId") REFERENCES "champs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rounds" ADD CONSTRAINT "rounds_champId_fkey" FOREIGN KEY ("champId") REFERENCES "champs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rounds" ADD CONSTRAINT "rounds_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "games" ADD CONSTRAINT "games_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "rounds"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "games" ADD CONSTRAINT "games_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;
