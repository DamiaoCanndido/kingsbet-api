import { Match, League, Player, Predict } from "@prisma/client";

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

export class PlayerEntity implements Player {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  leagueId: string;
  score: number;
  isAlive: boolean;
}

export class PredictEntity implements Predict {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  matchId: string;
  playerId: string;
  homePredict: number;
  awayPredict: number;
  leagueId: string;
  score: number;
}
