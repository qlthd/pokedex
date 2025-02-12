import { Test, TestingModule } from '@nestjs/testing';
import { PokemonsController } from './pokemons.controller';
import { PokemonsService } from './pokemons.service';
import { Pokemons } from './pokemons';

describe('PokemonsController', () => {
  let controller: PokemonsController;
  let service: PokemonsService;

  const mockPokemonsService = {
    create: jest
      .fn()
      .mockImplementation((pokemon: Pokemons) => Promise.resolve(pokemon)),
    findAll: jest.fn(),
    findByName: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonsController],
      providers: [{ provide: PokemonsService, useValue: mockPokemonsService }],
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

  it('should call the findAll method and return all pokemons', async () => {
    const mockPokemons = [
      { id: 1, name: 'toto' },
      { id: 2, name: 'titi' },
    ];
    jest.spyOn(service, 'findAll').mockResolvedValue(mockPokemons);
    expect(await controller.findAll()).toEqual(mockPokemons);
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should call the findByName method and return the pokemon', async () => {
    const pokemon: Pokemons = {
      id: 1,
      name: 'Pikachu',
    };
    jest.spyOn(service, 'findByName').mockResolvedValue(pokemon);
    expect(await controller.findByName('Pikachu')).toEqual(pokemon);
    expect(service.findByName).toHaveBeenCalledWith('Pikachu');
  });
});
