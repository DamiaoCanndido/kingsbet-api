import {
  Ability,
  AbilityBuilder,
  AbilityClass,
  ExtractSubjectType,
  InferSubjects,
} from "@casl/ability";
import { Injectable } from "@nestjs/common";
import { ChampEntity } from "../champ/entity";
import { TeamEntity } from "../team/entity";
import { UserEntity } from "../user/entity";

export enum Action {
  Manage = "manage",
  Create = "create",
  Read = "read",
  Update = "update",
  Delete = "delete",
}

export type Subjects =
  | InferSubjects<typeof TeamEntity | typeof UserEntity | typeof ChampEntity>
  | "all";

export type AppAbility = Ability<[Action, Subjects]>;

@Injectable()
export class CaslAbilityFactory {
  createForUser(user: UserEntity) {
    const { can, cannot, build } = new AbilityBuilder<
      Ability<[Action, Subjects]>
    >(Ability as AbilityClass<AppAbility>);

    if (user.isAdmin) {
      can(Action.Manage, "all"); // read-write access to everything
    } else {
      can(Action.Read, "all");
      cannot(Action.Create, TeamEntity).because("Only admins can create teams");
      cannot(Action.Update, TeamEntity).because("Only admins can update teams");
      cannot(Action.Delete, TeamEntity).because("Only admins can delete teams");

      cannot(Action.Create, ChampEntity).because(
        "Only admins can create champs",
      );
      cannot(Action.Update, ChampEntity).because(
        "Only admins can update champs",
      );
      cannot(Action.Delete, ChampEntity).because(
        "Only admins can delete champs",
      );
    }

    return build({
      // Read https://casl.js.org/v5/en/guide/subject-type-detection#use-classes-as-subject-types for details
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,
    });
  }
}
