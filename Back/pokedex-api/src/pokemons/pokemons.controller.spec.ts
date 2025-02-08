import { Test, TestingModule } from '@nestjs/testing';
import { PokemonsController } from './pokemons.controller';
import { PokemonsService } from './pokemons.service';
import { Pokemons } from './pokemons';

describe('PokemonsController', () => {
  let controller: PokemonsController;
  let service: PokemonsService;

  const mockPokemonsService = {
    create: jest.fn().mockImplementation((pokemon: Pokemons) => Promise.resolve(pokemon)),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonsController],
      providers: [
        { provide: PokemonsService, useValue: mockPokemonsService },
      ],
    }).compile();

    controller = module.get<PokemonsController>(PokemonsController);
    service = module.get<PokemonsService>(PokemonsService);
  });

  it('should call the create method and return the created pokemon', async () => {
    const pokemon: Pokemons = {
      id: 1,
      name: 'Pikachu',
    };
    expect(await controller.create(pokemon)).toEqual(pokemon);
    expect(service.create).toHaveBeenCalledWith(pokemon);
  });
});