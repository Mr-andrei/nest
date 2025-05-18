import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Actor } from '@prisma/client';
import { CreateActorDto } from './dto/create_actor.dto';

@Injectable()
export class ActorService {

  constructor(private  readonly prismaService: PrismaService) {
  }


  async create(dto: CreateActorDto): Promise<Actor> {

    const actor = await this.prismaService.actor.create({
      data: {
        name: dto.name
      }
    })

    return actor;
  }
}
