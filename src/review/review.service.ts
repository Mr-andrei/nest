import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReviewDto } from './dto/create-review-dto';
import { MovieService } from '../movie/movie.service';

@Injectable()
export class ReviewService {

  // constructor(
  //   @InjectRepository(ReviewEntity)
  //   private readonly reviewRepository: Repository<ReviewEntity>,
  //   private readonly movieService: MovieService,
  // ) {
  // }
  //
  //
  // async create(dto: CreateReviewDto): Promise<ReviewEntity> {
  //   const { description, rating, movieId } = dto;
  //
  //   const movie = await this.movieService.findById(movieId);
  //
  //   const review = await this.reviewRepository.create({
  //     description,
  //     rating,
  //     movie,
  //   });
  //
  //   return await this.reviewRepository.save(review);
  // }

}
