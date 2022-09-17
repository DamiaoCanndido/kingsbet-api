import { GameEntity } from "../../../game/entity";
import { Action, Subjects } from "../../casl-ability.factory";
import { RequiredRules } from "../casl-ability.decorator";

export class GameAbility implements RequiredRules {
  action: Action;
  subjects: Subjects;

  readGame() {
    return {
      action: Action.Read,
      subjects: GameEntity,
    };
  }

  createGame() {
    return {
      action: Action.Create,
      subjects: GameEntity,
    };
  }

  updateGame() {
    return {
      action: Action.Update,
      subjects: GameEntity,
    };
  }

  deleteGame() {
    return {
      action: Action.Delete,
      subjects: GameEntity,
    };
  }
}
