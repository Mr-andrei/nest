import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateMovieDto {

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsInt()
  releaseYear: number;

  @IsNotEmpty()
  @IsInt()
  id: string;
}