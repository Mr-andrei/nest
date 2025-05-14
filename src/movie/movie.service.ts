import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieEntity } from './entities/movie.entity';
import { Equal, Repository } from 'typeorm';
import { MovieDto } from './dto/movie.dto';
import { CreateMovieDto } from './dto/create-movie.dto';

@Injectable()
export class MovieService {
  constructor(
    // Подключаем Таблицу
    @InjectRepository(MovieEntity)
    private readonly movieRepository: Repository<MovieEntity>,
  ) {}

  async findAll(): Promise<MovieEntity[]> {
    return this.movieRepository.find({
      where: {
        isAvailable: false,
      },
      order: {
        createdAt: 'DESC',
      },
      // take: 1, // сколько записей
      // select: {
      //   id: true,
      //   title: true,
      // }  // какие поля должны приходить
    });
  }

  async findById(id: string): Promise<MovieEntity> {

    const movie = await this.movieRepository.findOne({
      where: {
        id,
      },
    });
    if (!movie) {
      throw new NotFoundException('Film not found');
    }
    return movie;
  }


  async create(dto: MovieDto): Promise<MovieEntity> {

    const movie = await this.movieRepository.create(dto);

    return await this.movieRepository.save(movie);
  }

  async update(dto: CreateMovieDto): Promise<boolean> {

    const { id } = dto;

    const movie = await this.findById(id);

    Object.assign(movie, dto);

    await this.movieRepository.save(movie);

    return true;
  }


  async delete(id: string): Promise<string> {
    const movie = await this.findById(id);

    if (!movie) {
      throw new NotFoundException('Film is not exist');
    }

    await this.movieRepository.remove(movie);

    return movie.id;

  }

}
