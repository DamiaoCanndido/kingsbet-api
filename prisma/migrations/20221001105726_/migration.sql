/*
  Warnings:

  - You are about to drop the `_GameToLeague` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_GameToLeague" DROP CONSTRAINT "_GameToLeague_A_fkey";

-- DropForeignKey
ALTER TABLE "_GameToLeague" DROP CONSTRAINT "_GameToLeague_B_fkey";

-- DropTable
DROP TABLE "_GameToLeague";
