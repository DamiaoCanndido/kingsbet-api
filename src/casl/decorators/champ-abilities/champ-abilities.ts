import { ChampEntity } from "../../../champ/entity";
import { Action, Subjects } from "../../casl-ability.factory";
import { RequiredRules } from "../casl-ability.decorator";

export class ChampAbility implements RequiredRules {
  action: Action;
  subjects: Subjects;

  readChamp() {
    return {
      action: Action.Read,
      subjects: ChampEntity,
    };
  }

  createChamp() {
    return {
      action: Action.Create,
      subjects: ChampEntity,
    };
  }

  updateChamp() {
    return {
      action: Action.Update,
      subjects: ChampEntity,
    };
  }

  deleteChamp() {
    return {
      action: Action.Delete,
      subjects: ChampEntity,
    };
  }
}
