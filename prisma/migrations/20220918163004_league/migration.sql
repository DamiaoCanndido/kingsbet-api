-- CreateTable
CREATE TABLE "League" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "playerAmount" INTEGER NOT NULL,
    "keysAmount" INTEGER NOT NULL,
    "phasesAmount" INTEGER NOT NULL,
    "matchesAmount" INTEGER NOT NULL,
    "subscription" DOUBLE PRECISION NOT NULL,
    "isPrivate" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "League_pkey" PRIMARY KEY ("id")
);
