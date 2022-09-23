import { Key } from "@prisma/client";

export class KeyEntity implements Key {
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
