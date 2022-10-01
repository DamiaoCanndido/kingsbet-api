-- CreateTable
CREATE TABLE "_GameToLeague" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_GameToLeague_AB_unique" ON "_GameToLeague"("A", "B");

-- CreateIndex
CREATE INDEX "_GameToLeague_B_index" ON "_GameToLeague"("B");

-- AddForeignKey
ALTER TABLE "_GameToLeague" ADD CONSTRAINT "_GameToLeague_A_fkey" FOREIGN KEY ("A") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameToLeague" ADD CONSTRAINT "_GameToLeague_B_fkey" FOREIGN KEY ("B") REFERENCES "leagues"("id") ON DELETE CASCADE ON UPDATE CASCADE;
