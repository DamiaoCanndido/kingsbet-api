import { Keying } from "@prisma/client";

export class KeyEntity implements Keying {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  order: number;
  name: string;
  leagueId: string;
  playersAmount: number;
  finishedPhases: number;
  phasesAmount: number;
  isPlayOffs: boolean;
  playerKickAmount: number;
}
