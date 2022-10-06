import { Match, League } from "@prisma/client";

export class LeagueEntity implements League {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  playersAmount: number;
  playersAccepted: number;
  matchesAmount: number;
  subscription: number;
  isPrivate: boolean;
  start: Date;
}

export class MatchEntity implements Match {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  gameId: string;
  leagueId: string;
}
