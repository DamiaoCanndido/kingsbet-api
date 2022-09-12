/*
  Warnings:

  - The `name` column on the `groups` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `name` column on the `rounds` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `start` to the `games` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "GroupType" AS ENUM ('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');

-- CreateEnum
CREATE TYPE "RoundType" AS ENUM ('Play_offs', 'Round_of_16', 'Quarter_finals', 'Semi_finals', 'Tirtd_place', 'Final');

-- AlterTable
ALTER TABLE "games" ADD COLUMN     "start" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "groups" ADD COLUMN     "order" SERIAL NOT NULL,
DROP COLUMN "name",
ADD COLUMN     "name" "GroupType";

-- AlterTable
ALTER TABLE "rounds" ADD COLUMN     "order" SERIAL NOT NULL,
DROP COLUMN "name",
ADD COLUMN     "name" "RoundType";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "cash" DOUBLE PRECISION NOT NULL DEFAULT 0;
