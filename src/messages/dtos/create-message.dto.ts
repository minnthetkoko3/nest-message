import { IsDate, IsString } from "class-validator";

export class CreateMessageDto {
    @IsString()
    content: string;

    // @IsDate()
    // createDate: Date;
}