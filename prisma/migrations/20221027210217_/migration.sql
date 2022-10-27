/*
  Warnings:

  - You are about to drop the column `numberGames` on the `rounds` table. All the data in the column will be lost.
  - You are about to drop the column `playOffs` on the `rounds` table. All the data in the column will be lost.
  - You are about to drop the column `cash` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `leagues` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `matches` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `players` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `predicts` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[order]` on the table `rounds` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "matches" DROP CONSTRAINT "matches_gameId_fkey";

-- DropForeignKey
ALTER TABLE "matches" DROP CONSTRAINT "matches_leagueId_fkey";

-- DropForeignKey
ALTER TABLE "players" DROP CONSTRAINT "players_leagueId_fkey";

-- DropForeignKey
ALTER TABLE "players" DROP CONSTRAINT "players_userId_fkey";

-- DropForeignKey
ALTER TABLE "predicts" DROP CONSTRAINT "predicts_leagueId_fkey";

-- DropForeignKey
ALTER TABLE "predicts" DROP CONSTRAINT "predicts_matchId_fkey";

-- DropForeignKey
ALTER TABLE "predicts" DROP CONSTRAINT "predicts_playerId_fkey";

-- AlterTable
ALTER TABLE "rounds" DROP COLUMN "numberGames",
DROP COLUMN "playOffs";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "cash";

-- DropTable
DROP TABLE "leagues";

-- DropTable
DROP TABLE "matches";

-- DropTable
DROP TABLE "players";

-- DropTable
DROP TABLE "predicts";

-- CreateIndex
CREATE UNIQUE INDEX "rounds_order_key" ON "rounds"("order");
