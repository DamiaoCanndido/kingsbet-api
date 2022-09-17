import { Module } from "@nestjs/common";
import { GameService } from "./game.service";
import { GameController } from "./game.controller";
import { CaslModule } from "../casl/casl.module";

@Module({
  controllers: [GameController],
  providers: [GameService],
  imports: [CaslModule],
})
export class GameModule {}
