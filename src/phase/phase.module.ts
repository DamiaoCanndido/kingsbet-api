import { Module } from "@nestjs/common";
import { PhaseService } from "./phase.service";
import { PhaseController } from "./phase.controller";
import { CaslModule } from "../casl/casl.module";

@Module({
  controllers: [PhaseController],
  providers: [PhaseService],
  imports: [CaslModule],
})
export class PhaseModule {}
