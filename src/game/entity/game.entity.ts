import { Game } from "@prisma/client";

export class GameEntity implements Game {
  champId: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  homeId: string;
  homeScore: number;
  awayId: string;
  awayScore: number;
  roundId: string;
  groupId: string;
  playOffs: boolean;
  homeKickScore: number;
  awayKickScore: number;
  start: Date;
}
