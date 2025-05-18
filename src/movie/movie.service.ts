import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Movie } from '@prisma/client';
import { CreateMovieDto } from './dto/create-movie.dto';

@Injectable()
export class MovieService {
  constructor(
    private readonly prismaService: PrismaService,
  ) {
  }

  async findAll(): Promise<Movie[]> {
    return this.prismaService.movie.findMany({
      where: {
        isAvailable: true,
      },
    });
  }

  async findById(id: string): Promise<Movie> {

    const movie = await this.prismaService.movie.findFirst({
      where: {
        id,
      },
    });
    if (!movie) {
      throw new NotFoundException('Film not found');
    }
    return movie;
  }


  async create(dto: CreateMovieDto): Promise<Movie> {
    const { title, releaseYear, actorIds, imageUrl } = dto;

    const actors = await this.prismaService.actor.findMany({
      where: {
        id: {
          in: actorIds,
        },
      },
    });

    if (!actors || !actors.length) {
      throw new NotFoundException('Актеры не найдены');
    }

    const poster = imageUrl ? { create: { imageUrl: imageUrl } } : undefined;
    const newActors = { connect: actors.map(actor => ({ id: actor.id })) };

    const movie = await this.prismaService.movie.create({
      data: {
        title,
        releaseYear,
        poster,
        actors: newActors,
      },
    });

    return movie;
  }


  async update(dto: CreateMovieDto): Promise<boolean> {

    const { id } = dto;

    const movie = await this.findById(id);


    await this.prismaService.movie.update({ where: { id: movie.id }, data: { ...dto } });

    return true;
  }


  async delete(id: string): Promise<string> {
    const movie = await this.findById(id);

    if (!movie) {
      throw new NotFoundException('Film is not exist');
    }

    await this.prismaService.movie.delete({ where: { id: movie.id } });

    return movie.id;

  }

}
