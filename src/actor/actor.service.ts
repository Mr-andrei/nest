import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActorsEntity } from './entities/actors.entity';
import { CreateActorDto } from './dto/create_actor.dto';

@Injectable()
export class ActorService {

  constructor(
    // Подключаем Таблицу
    @InjectRepository(ActorsEntity)
    private readonly actorRepository: Repository<ActorsEntity>,
  ) {
  }


  async create(dto: CreateActorDto): Promise<ActorsEntity> {

    const actor = await this.actorRepository.create(dto);

    return this.actorRepository.save(actor);
  }
}
