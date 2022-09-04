import { Module } from "@nestjs/common";
import { TeamService } from "./team.service";
import { TeamController } from "./team.controller";
import { CaslModule } from "../casl/casl.module";

@Module({
  controllers: [TeamController],
  providers: [TeamService],
  imports: [CaslModule],
})
export class TeamModule {}
