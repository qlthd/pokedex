import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
}