import { User } from "@prisma/client";

export class UserEntity implements User {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  email: string;
  hash: string;
  isAdmin: boolean;
  cash: number;
}
