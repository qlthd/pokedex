import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { PokemonsService } from './pokemons.service';
import { Pokemons } from './pokemons';
import { NotFoundException } from '@nestjs/common';

@Controller('pokemons')
export class PokemonsController {
  constructor(private readonly pokemonsService: PokemonsService) {}

  @Post()
  async create(@Body() pokemon: Pokemons): Promise<Pokemons> {
    return this.pokemonsService.create(pokemon);
  }

  @Get()
  async findAll(): Promise<Pokemons[]> {
    return this.pokemonsService.findAll();
  }

  @Get(':name')
  async findByName(@Param('name') name: string): Promise<Pokemons[] | null> {
    const pokemon = await this.pokemonsService.findByName(name);
    if (!pokemon) {
      throw new NotFoundException(`Pokemon with name ${name} not found`);
    }
    return pokemon;
  }
}
