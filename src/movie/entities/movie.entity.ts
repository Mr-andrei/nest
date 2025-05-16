import {
  Column,
  CreateDateColumn,
  Entity, JoinColumn, JoinTable,
  ManyToMany,
  OneToMany, OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ReviewEntity } from '../../review/entities/review.entity';
import { ActorsEntity } from '../../actor/entities/actors.entity';
import { MoviePosterEntity } from './poster.entity';

export enum Genre {
  ACTION = 'action',
  COMEDY = 'comedy',
  TRILLER = 'triller',
}

@Entity({ name: 'movie' })
export class MovieEntity {
  @PrimaryGeneratedColumn('uuid') // атоматически создает по порядку  1,2,3
    // @PrimaryColumn()
    // @Generated('uuid') // будет id как строка
  id: string;

  @Column({
    type: 'varchar',
    length: 128,
  })
  title: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  description: string;

  @Column({
    name: 'release_year',
    type: 'int',
    unsigned: true,
  })
  releaseYear: number;

  @Column({
    type: 'decimal',
    precision: 3,
    scale: 1,
    default: 0.0,
  })
  rating: number;

  @Column({
    name: 'is_available',
    type: 'boolean',
    default: false,
  })
  isAvailable: boolean;

  // @Column({
  //   type: 'date',
  //   nullable: true,
  // })
  // releaseDate: string;

  @Column({
    type: 'enum',
    enum: Genre,
    default: Genre.COMEDY,
  })
  genre: Genre;

  @OneToOne(() => MoviePosterEntity, (poster) => poster.movie, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'poster_id' })
  poster: MoviePosterEntity;

  @Column({ name: 'poster_id', type: 'uuid', nullable: true })
  posterId: string;

  @OneToMany(() => ReviewEntity, (review) => review.movie)
  reviews: ReviewEntity[];

  @CreateDateColumn(
    {
      name: 'created_at',
    },
  )
  createdAt: Date;

  @ManyToMany(() => ActorsEntity, (actor) => actor.movies)
  @JoinTable({
    name: 'movie_actors',
    joinColumn: { name: 'movie_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'actor_id', referencedColumnName: 'id' },
  })
  actors: ActorsEntity[];


  @UpdateDateColumn(
    {
      name: 'update_at',
    },
  )
  updateAt: Date;
}
