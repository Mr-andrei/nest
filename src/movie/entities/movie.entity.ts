import {
  Column,
  CreateDateColumn,
  Entity,
  Generated, OneToMany,
  PrimaryColumn, PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ReviewEntity } from '../../review/entity/review.entity';

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

  @OneToMany(() => ReviewEntity, (review)=> review.movie)
  reviews: ReviewEntity[]

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
