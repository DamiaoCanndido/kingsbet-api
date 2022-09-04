import { TeamEntity } from "../../../team/entity";
import { Action, Subjects } from "../../casl-ability.factory";
import { RequiredRules } from "../casl-ability.decorator";

export class TeamAbility implements RequiredRules {
  action: Action;
  subjects: Subjects;

  readTeam() {
    return {
      action: Action.Read,
      subjects: TeamEntity,
    };
  }

  createTeam() {
    return {
      action: Action.Create,
      subjects: TeamEntity,
    };
  }

  updateTeam() {
    return {
      action: Action.Update,
      subjects: TeamEntity,
    };
  }

  deleteTeam() {
    return {
      action: Action.Delete,
      subjects: TeamEntity,
    };
  }
}
