/*
  Warnings:

  - You are about to drop the column `groupId` on the `games` table. All the data in the column will be lost.
  - You are about to drop the column `champId` on the `rounds` table. All the data in the column will be lost.
  - Made the column `groupId` on table `rounds` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "games" DROP CONSTRAINT "games_groupId_fkey";

-- DropForeignKey
ALTER TABLE "rounds" DROP CONSTRAINT "rounds_champId_fkey";

-- DropIndex
DROP INDEX "groups_champId_idx";

-- AlterTable
ALTER TABLE "games" DROP COLUMN "groupId";

-- AlterTable
ALTER TABLE "groups" ALTER COLUMN "order" DROP DEFAULT;
DROP SEQUENCE "groups_order_seq";

-- AlterTable
ALTER TABLE "rounds" DROP COLUMN "champId",
ALTER COLUMN "groupId" SET NOT NULL,
ALTER COLUMN "order" DROP DEFAULT;
DROP SEQUENCE "rounds_order_seq";
