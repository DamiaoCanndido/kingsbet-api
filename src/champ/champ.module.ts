import { Module } from "@nestjs/common";
import { ChampService } from "./champ.service";
import { ChampController } from "./champ.controller";
import { CaslModule } from "../casl/casl.module";

@Module({
  controllers: [ChampController],
  providers: [ChampService],
  imports: [CaslModule],
})
export class ChampModule {}
