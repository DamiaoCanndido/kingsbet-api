/*
  Warnings:

  - You are about to drop the column `playerAmount` on the `leagues` table. All the data in the column will be lost.
  - Added the required column `playersAmount` to the `leagues` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "leagues" DROP COLUMN "playerAmount",
ADD COLUMN     "playersAccepted" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "playersAmount" INTEGER NOT NULL;
