import { Module } from "@nestjs/common";
import { RoundService } from "./round.service";
import { RoundController } from "./round.controller";
import { CaslModule } from "../casl/casl.module";

@Module({
  controllers: [RoundController],
  providers: [RoundService],
  imports: [CaslModule],
})
export class RoundModule {}
