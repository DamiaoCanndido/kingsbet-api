import { Module } from "@nestjs/common";
import { GroupService } from "./group.service";
import { GroupController } from "./group.controller";
import { CaslModule } from "../casl/casl.module";

@Module({
  controllers: [GroupController],
  providers: [GroupService],
  imports: [CaslModule],
})
export class GroupModule {}
