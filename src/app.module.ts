import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./user/user.module";
import { PrismaModule } from "./prisma/prisma.module";
import { ConfigModule } from "@nestjs/config";
import { TeamModule } from "./team/team.module";
import { ChampModule } from "./champ/champ.module";
import { CaslModule } from "./casl/casl.module";
import { GroupModule } from "./group/group.module";
import { RoundModule } from "./round/round.module";
import { GameModule } from "./game/game.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    PrismaModule,
    TeamModule,
    ChampModule,
    CaslModule,
    GroupModule,
    RoundModule,
    GameModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
