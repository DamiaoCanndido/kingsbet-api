import { Ability, AbilityBuilder, AbilityClass, ExtractSubjectType, InferSubjects } from "@casl/ability";
import { Injectable } from "@nestjs/common";
import { User, Team, TeamType } from "@prisma/client";

export enum Action {
    Manage = 'manage',
    Create = 'create',
    Read = 'read',
    Update = 'update',
    Delete = 'delete',
}

export class UserEntity implements User {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    email: string;
    hash: string;
    isAdmin: boolean;
}

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

export type Subjects = InferSubjects<typeof TeamEntity | typeof UserEntity> | 'all';

export type AppAbility = Ability<[Action, Subjects]>;

@Injectable()
export class CaslAbilityFactory {
    createForUser(user: UserEntity) {
        const { can, cannot, build } = new AbilityBuilder<
          Ability<[Action, Subjects]>
        >(Ability as AbilityClass<AppAbility>);
    
        if (user.isAdmin) {
          can(Action.Manage, 'all'); // read-write access to everything
        } else {
          can(Action.Read, 'all');
          cannot(Action.Delete, TeamEntity).because('Only admins can delete teams')
        }
    
        return build({
          // Read https://casl.js.org/v5/en/guide/subject-type-detection#use-classes-as-subject-types for details
          detectSubjectType: (item) =>
            item.constructor as ExtractSubjectType<Subjects>,
        });
      }
}
