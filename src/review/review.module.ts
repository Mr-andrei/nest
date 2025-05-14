import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewEntity } from './entity/review.entity';
import { MovieService } from '../movie/movie.service';
import { MovieEntity } from '../movie/entities/movie.entity';

@Module({
  controllers: [ReviewController],
  providers: [ReviewService, MovieService],
  imports: [
    TypeOrmModule.forFeature([ReviewEntity, MovieEntity]),
  ],
})
export class ReviewModule {
}
