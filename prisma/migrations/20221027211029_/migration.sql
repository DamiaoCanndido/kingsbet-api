/*
  Warnings:

  - A unique constraint covering the columns `[season]` on the table `champs` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `season` to the `champs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "champs" ADD COLUMN     "season" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "champs_season_key" ON "champs"("season");
