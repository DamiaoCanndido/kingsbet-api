import { Action, Subjects } from "../casl-ability.factory";
import { RequiredRules } from ".";

export class GenericAbilities<T> implements RequiredRules {
  // T = model entity
  constructor(private t: T) {}

  action: Action;
  subjects: Subjects;

  read() {
    return {
      action: Action.Read,
      subjects: this.t,
    };
  }

  create() {
    return {
      action: Action.Create,
      subjects: this.t,
    };
  }

  update() {
    return {
      action: Action.Update,
      subjects: this.t,
    };
  }

  delete() {
    return {
      action: Action.Delete,
      subjects: this.t,
    };
  }
}
