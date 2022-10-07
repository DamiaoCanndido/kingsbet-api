/*
  Warnings:

  - The primary key for the `players` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `players` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "players_leagueId_userId_key";

-- AlterTable
ALTER TABLE "players" DROP CONSTRAINT "players_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "players_pkey" PRIMARY KEY ("leagueId", "userId");