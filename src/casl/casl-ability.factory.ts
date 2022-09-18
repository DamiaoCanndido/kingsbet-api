import {
  Ability,
  AbilityBuilder,
  AbilityClass,
  ExtractSubjectType,
  InferSubjects,
} from "@casl/ability";
import { Injectable } from "@nestjs/common";
import { GroupEntity } from "../group/entity";
import { ChampEntity } from "../champ/entity";
import { TeamEntity } from "../team/entity";
import { UserEntity } from "../user/entity";
import { RoundEntity } from "../round/entity";
import { GameEntity } from "../game/entity";
import { LeagueEntity } from "../league/entity";

export enum Action {
  Manage = "manage",
  Create = "create",
  Read = "read",
  Update = "update",
  Delete = "delete",
}

export type Subjects =
  | InferSubjects<
      | typeof TeamEntity
      | typeof UserEntity
      | typeof ChampEntity
      | typeof GroupEntity
      | typeof RoundEntity
      | typeof GameEntity
      | typeof LeagueEntity
    >
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

      cannot(Action.Create, GroupEntity).because(
        "Only admins can create Groups",
      );
      cannot(Action.Update, GroupEntity).because(
        "Only admins can update Groups",
      );
      cannot(Action.Delete, GroupEntity).because(
        "Only admins can delete Groups",
      );

      cannot(Action.Create, RoundEntity).because(
        "Only admins can create Rounds",
      );
      cannot(Action.Update, RoundEntity).because(
        "Only admins can update Rounds",
      );
      cannot(Action.Delete, RoundEntity).because(
        "Only admins can delete Rounds",
      );
    }

    return build({
      // Read https://casl.js.org/v5/en/guide/subject-type-detection#use-classes-as-subject-types for details
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,
    });
  }
}
