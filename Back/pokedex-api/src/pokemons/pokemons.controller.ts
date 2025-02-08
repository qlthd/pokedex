import {Body, Controller, Post} from '@nestjs/common';
import {PokemonsService} from "./pokemons.service";
import {Pokemons} from "./pokemons";

@Controller('pokemons')
export class PokemonsController {
    constructor(private readonly pokemonsService: PokemonsService) {}

    @Post()
    async create(@Body() pokemon: Pokemons): Promise<Pokemons> {
        return this.pokemonsService.create(pokemon);
    }
}
