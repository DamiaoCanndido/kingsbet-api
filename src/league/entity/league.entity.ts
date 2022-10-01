import { GamesOnLeagues, League } from "@prisma/client";

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

export class gamesOnLeaguesEntity implements GamesOnLeagues {
  gameId: string;
  leagueId: string;
}
