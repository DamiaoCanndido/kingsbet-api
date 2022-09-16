import { Round, RoundType } from "@prisma/client";

export class RoundEntity implements Round {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: RoundType;
  order: number;
  champId: string;
  groupId: string;
  playOffs: boolean;
  numberGames: number;
}
