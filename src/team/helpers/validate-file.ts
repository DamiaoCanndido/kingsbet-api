import { HttpStatus, ParseFilePipeBuilder } from "@nestjs/common";

export const ValidateTeamShield = new ParseFilePipeBuilder()
    .addFileTypeValidator({
        fileType: 'png',
    })
    .build({
        errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
    });