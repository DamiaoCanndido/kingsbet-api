-- AlterTable
ALTER TABLE "games" ADD COLUMN     "champId" TEXT,
ADD COLUMN     "groupId" TEXT,
ALTER COLUMN "roundId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "games" ADD CONSTRAINT "games_champId_fkey" FOREIGN KEY ("champId") REFERENCES "champs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "games" ADD CONSTRAINT "games_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "groups"("id") ON DELETE SET NULL ON UPDATE CASCADE;
