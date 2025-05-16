import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewEntity } from './entities/review.entity';
import { MovieService } from '../movie/movie.service';
import { MovieEntity } from '../movie/entities/movie.entity';
import { ActorsEntity } from '../actor/entities/actors.entity';

@Module({
  controllers: [ReviewController],
  providers: [ReviewService, MovieService],
  imports: [
    TypeOrmModule.forFeature([ReviewEntity, MovieEntity, ActorsEntity]),
  ],
})
export class ReviewModule {
}
