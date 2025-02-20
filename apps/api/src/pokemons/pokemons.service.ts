import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Pokemons } from './pokemons';

@Injectable()
export class PokemonsService {
  constructor(
    @InjectRepository(Pokemons)
    private readonly pokemonsRepository: Repository<Pokemons>,
  ) {}

  async create(pokemon: Pokemons): Promise<Pokemons> {
    return this.pokemonsRepository.save(pokemon);
  }

  async findAll(): Promise<Pokemons[]> {
    return this.pokemonsRepository.find({ relations: ['types'] });
  }

  async findByName(name: string): Promise<Pokemons[] | null> {
    return this.pokemonsRepository.find({ where: { name: Like(`${name}%`) }, relations: ['types'] });
  }
}
