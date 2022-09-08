import { GroupEntity } from "../../../group/entity";
import { Action, Subjects } from "../../casl-ability.factory";
import { RequiredRules } from "../casl-ability.decorator";

export class GroupAbility implements RequiredRules {
  action: Action;
  subjects: Subjects;

  readGroup() {
    return {
      action: Action.Read,
      subjects: GroupEntity,
    };
  }

  createGroup() {
    return {
      action: Action.Create,
      subjects: GroupEntity,
    };
  }

  updateGroup() {
    return {
      action: Action.Update,
      subjects: GroupEntity,
    };
  }

  deleteGroup() {
    return {
      action: Action.Delete,
      subjects: GroupEntity,
    };
  }
}
