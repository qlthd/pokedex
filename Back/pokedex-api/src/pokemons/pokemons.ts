import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pokemons {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
