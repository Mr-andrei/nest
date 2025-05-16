import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { MovieEntity } from '../../movie/entities/movie.entity';


@Entity({ name: 'actors' })
export class ActorsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 64
  })
  name: string;

  @ManyToMany(() => MovieEntity, (movie) => movie.actors)
  movies: MovieEntity[];

  @CreateDateColumn(
    {
      name: 'created_at',
    },
  )
  createdAt: Date;

  @UpdateDateColumn(
    {
      name: 'update_at',
    },
  )
  updateAt: Date;
}
