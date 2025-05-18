import { IsArray, IsInt, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateMovieDto {

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsInt()
  releaseYear: number;


  id: string;

  imageUrl?: string

  @IsArray()
  @IsUUID('4', { each: true })
  actorIds: string[];
}