/*
  Warnings:

  - Added the required column `code` to the `teams` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "teams" ADD COLUMN     "code" TEXT NOT NULL;
