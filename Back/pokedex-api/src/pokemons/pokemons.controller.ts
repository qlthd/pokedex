import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { PokemonsService } from './pokemons.service';
import { Pokemons } from './pokemons';

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
  async findByName(@Param('name') name: string): Promise<Pokemons | null> {
    return this.pokemonsService.findByName(name);
  }
}
