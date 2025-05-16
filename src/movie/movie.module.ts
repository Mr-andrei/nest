import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieEntity } from './entities/movie.entity';
import { ActorsEntity } from '../actor/entities/actors.entity';
import { MoviePosterEntity } from './entities/poster.entity';

@Module({
  controllers: [MovieController],
  providers: [MovieService],
  imports: [TypeOrmModule.forFeature([MovieEntity, ActorsEntity, MoviePosterEntity])]
})
export class MovieModule {}
