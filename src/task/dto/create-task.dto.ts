import { IsNotEmpty, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {

  @ApiProperty({
    description: 'Название'
  })
  @IsString()
  @IsNotEmpty()
  @Length(3, 20)
  title: string;

  @ApiProperty({
    description: 'Является задача выполненой'
  })
  isCompleted: boolean;
}