import { ConfigService } from "@nestjs/config";
import { S3 } from "aws-sdk";

export class UploadFile {
    constructor(private config: ConfigService, private file: Express.Multer.File){}

    async upload(): Promise<S3.ManagedUpload.SendData> {
        const s3 = new S3();

        const shield = await s3.upload({
            Bucket: this.config.get("AWS_STORAGE_BUCKET_NAME"),
            ACL: "public-read",
            Key: this.file.originalname,
            Body: this.file.buffer,
        }).promise()

        return shield;
    }
}