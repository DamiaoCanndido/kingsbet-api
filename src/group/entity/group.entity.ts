import { Group } from "@prisma/client";

export class GroupEntity implements Group {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  champId: string;
}
