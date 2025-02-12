import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Pokemons } from '../pokemons/pokemons';

@Entity()
export class Type {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Pokemons, (pokemon) => pokemon.types)
  pokemons: Pokemons[];
}
