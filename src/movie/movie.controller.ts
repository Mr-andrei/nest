import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieDto } from './dto/movie.dto';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {
  }

  @Get()
  findAll() {
    return this.movieService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.movieService.findById(id);
  }

  @Post()
  create(@Body() dto: MovieDto) {
    return this.movieService.create(dto);
  }

  @Put()
  update(@Body() dto: CreateMovieDto) {

    return this.movieService.update(dto);

  }

  @Delete(':id')
  delete(@Param('id') id: string) {

    return this.movieService.delete(id);

  }

}
