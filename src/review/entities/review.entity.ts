
import {
  Column,
  CreateDateColumn,
  Entity,
  Generated, JoinColumn, ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MovieEntity } from '../../movie/entities/movie.entity';

@Entity({ name: 'reviews' })
export class ReviewEntity {
  // @PrimaryGeneratedColumn() // атоматически создает по порядку  1,2,3
  @PrimaryColumn()
  @Generated('uuid') // будет id как строка
  id: string;

  @Column({
    type: 'text',
  })
  description: string;

  @Column({
    type: 'decimal',
    precision: 3,
    scale: 1,
    default: 0.0,
  })
  rating: number;

  @Column({
    name: 'movie_id',
    type: 'uuid'
  })
  movieId: string

  @ManyToOne(()=> MovieEntity, (movie) => movie.reviews, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({name: 'movie_id'})
  movie: MovieEntity;

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
