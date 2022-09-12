/*
  Warnings:

  - The values [Tirtd_place] on the enum `RoundType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "RoundType_new" AS ENUM ('Play_offs', 'Round_of_16', 'Quarter_finals', 'Semi_finals', 'Third_place', 'Final');
ALTER TABLE "rounds" ALTER COLUMN "name" TYPE "RoundType_new" USING ("name"::text::"RoundType_new");
ALTER TYPE "RoundType" RENAME TO "RoundType_old";
ALTER TYPE "RoundType_new" RENAME TO "RoundType";
DROP TYPE "RoundType_old";
COMMIT;
