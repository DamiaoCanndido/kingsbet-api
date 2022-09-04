import { Module } from "@nestjs/common";
import { ChampService } from "./champ.service";
import { ChampController } from "./champ.controller";

@Module({
  controllers: [ChampController],
  providers: [ChampService],
})
export class ChampModule {}
