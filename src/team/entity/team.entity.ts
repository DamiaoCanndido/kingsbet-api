import { Team, TeamType } from "@prisma/client";

export class TeamEntity implements Team {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  country: string;
  shieldUrl: string;
  shieldKey: string;
  stadium: string;
  teamType: TeamType;
  code: string;
}
