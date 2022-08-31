import { ConfigService } from "@nestjs/config";
import { S3 } from "aws-sdk";

export class FileHandler {
    constructor(private config: ConfigService, private file?: Express.Multer.File){}

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

    async remove(key: string) {
        const s3 = new S3();
        
        await s3.deleteObject({
            Bucket: this.config.get("AWS_STORAGE_BUCKET_NAME"),
            Key: key
        }).promise()
    }
}