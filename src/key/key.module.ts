import { Module } from "@nestjs/common";
import { KeyService } from "./key.service";
import { KeyController } from "./key.controller";
import { CaslModule } from "../casl/casl.module";

@Module({
  controllers: [KeyController],
  providers: [KeyService],
  imports: [CaslModule],
})
export class KeyModule {}
