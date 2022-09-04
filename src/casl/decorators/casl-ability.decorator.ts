import { SetMetadata } from "@nestjs/common";
import { Action, Subjects } from "../casl-ability.factory";

export const CHECK_CASL_ABILITY = "check-casl-ability";

export interface RequiredRules {
  action: Action;
  subjects: Subjects;
}

export const CheckCaslAbility = (...requirements: RequiredRules[]) =>
  SetMetadata(CHECK_CASL_ABILITY, requirements);
