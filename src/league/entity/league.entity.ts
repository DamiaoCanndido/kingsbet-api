import { League } from "@prisma/client";

export class LeagueEntity implements League {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  playersAmount: number;
  playersAccepted: number;
  phasesAmount: number;
  matchesAmount: number;
  subscription: number;
  isPrivate: boolean;
  start: Date;
}
