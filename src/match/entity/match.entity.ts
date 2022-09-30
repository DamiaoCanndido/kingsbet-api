import { Match } from "@prisma/client";

export class MatchEntity implements Match {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  gameId: string;
  phaseId: string;
  isAvailable: boolean;
}
