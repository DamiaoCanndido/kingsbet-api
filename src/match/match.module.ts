import { Module } from "@nestjs/common";
import { MatchService } from "./match.service";
import { MatchController } from "./match.controller";
import { CaslModule } from "../casl/casl.module";

@Module({
  controllers: [MatchController],
  providers: [MatchService],
  imports: [CaslModule],
})
export class MatchModule {}
