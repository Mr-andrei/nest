import { IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateReviewDto {

  @IsString()
  description: string;

  @IsNumber()
  rating: number;

  @IsUUID('4')
  movieId: string;

}