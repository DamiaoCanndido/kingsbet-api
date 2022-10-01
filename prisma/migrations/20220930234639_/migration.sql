/*
  Warnings:

  - You are about to drop the `matches` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "matches" DROP CONSTRAINT "matches_gameId_fkey";

-- DropForeignKey
ALTER TABLE "matches" DROP CONSTRAINT "matches_phaseId_fkey";

-- DropTable
DROP TABLE "matches";
