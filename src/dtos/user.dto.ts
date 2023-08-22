import { IsNotEmpty, IsString, IsUrl } from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  userName: string; // required().string().max(1)

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  avatar: string;
}