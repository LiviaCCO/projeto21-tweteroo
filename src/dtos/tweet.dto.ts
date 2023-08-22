import { IsNotEmpty, IsString } from "class-validator";

export class CreateTweetDto {
  @IsString()
  @IsNotEmpty()
  user: string; // required().string().max(1)

  @IsString()
  @IsNotEmpty()
  tweet: string;
}