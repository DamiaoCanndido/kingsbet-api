import { Phase } from "@prisma/client";

export class PhaseEntity implements Phase {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  order: number;
  name: string;
  leagueId: string;
  matchesAmount: number;
  fullMatches: number;
  isPlayOffs: boolean;
  playerKickAmount: number;
  isAvailable: boolean;
}
