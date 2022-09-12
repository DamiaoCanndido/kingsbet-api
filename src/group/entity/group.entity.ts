import { Group, GroupType } from "@prisma/client";

export class GroupEntity implements Group {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: GroupType;
  order: number;
  champId: string;
}
