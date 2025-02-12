import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { Type } from '../type/type';

@Entity()
export class Pokemons {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Type)
  @JoinTable()
  types: Type[];

  @Column()
  description: string;

  @Column()
  imageUrl: string;
}
