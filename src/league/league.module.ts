import { Module } from "@nestjs/common";
import { LeagueService } from "./league.service";
import { LeagueController } from "./league.controller";
import { CaslModule } from "../casl/casl.module";

@Module({
  controllers: [LeagueController],
  providers: [LeagueService],
  imports: [CaslModule],
})
export class LeagueModule {}
