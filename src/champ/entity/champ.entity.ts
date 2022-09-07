import { Champ, ChampType } from "@prisma/client";

export class ChampEntity implements Champ {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  country: string;
  shieldUrl: string;
  shieldKey: string;
  champType: ChampType;
}
