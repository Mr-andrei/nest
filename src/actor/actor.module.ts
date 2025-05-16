import { Module } from '@nestjs/common';
import { ActorService } from './actor.service';
import { ActorController } from './actor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActorsEntity } from './entities/actors.entity';

@Module({
  controllers: [ActorController],
  providers: [ActorService],
  imports: [TypeOrmModule.forFeature([ActorsEntity])]
})
export class ActorModule {}
