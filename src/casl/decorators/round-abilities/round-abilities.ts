import { RoundEntity } from "../../../round/entity";
import { Action, Subjects } from "../../casl-ability.factory";
import { RequiredRules } from "../casl-ability.decorator";

export class RoundAbility implements RequiredRules {
  action: Action;
  subjects: Subjects;

  readRound() {
    return {
      action: Action.Read,
      subjects: RoundEntity,
    };
  }

  createRound() {
    return {
      action: Action.Create,
      subjects: RoundEntity,
    };
  }

  updateRound() {
    return {
      action: Action.Update,
      subjects: RoundEntity,
    };
  }

  deleteRound() {
    return {
      action: Action.Delete,
      subjects: RoundEntity,
    };
  }
}
