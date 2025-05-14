import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateTaskDto {

  @IsString()
  @IsNotEmpty()
  @Length(3, 20)
  title: string;

  isCompleted: boolean;
}