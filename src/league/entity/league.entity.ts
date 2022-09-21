import { League } from "@prisma/client";

export class LeagueEntity implements League {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  playerAmount: number;
  playersAccepted: number;
  keysAmount: number;
  phasesAmount: number;
  matchesAmount: number;
  subscription: number;
  isPrivate: boolean;
}
