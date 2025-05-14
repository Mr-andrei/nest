import { IsBoolean, IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateTaskDto {

  @IsString({message: 'Название должно быть строкой'})
  @IsNotEmpty({message: 'Название должно быть пустой'})
  @Length(3, 20, {message: 'Название должно быть меньше 3 '})
  title: string;

  @IsBoolean()
  isCompleted: boolean;
}