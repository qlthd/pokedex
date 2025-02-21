import { Test, TestingModule } from '@nestjs/testing';
import { PokemonsService } from './pokemons.service';
import { Pokemons } from './pokemons';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

const mockPokemonsRepository = {
  save: jest.fn().mockImplementation((pokemon) => Promise.resolve(pokemon)),
  find: jest.fn(),
  findOne: jest.fn(),
};

describe('PokemonsService', () => {
  let service: PokemonsService;
  let repository: Repository<Pokemons>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PokemonsService,
        {
          provide: getRepositoryToken(Pokemons),
          useValue: mockPokemonsRepository,
        },
      ],
    }).compile();

    service = module.get<PokemonsService>(PokemonsService);
    repository = module.get<Repository<Pokemons>>(getRepositoryToken(Pokemons));
  });

  it('should call the create method and return the created pokemon', async () => {
    const pokemon: Pokemons = {
      id: 1,
      name: 'Pikachu',
      types: [{ id: 1, name: 'Electric', pokemons: [] }],
      description: 'Electric type pokemon',
      imageUrl: 'https://pokeapi.co/api/v2/pokemon/25/',
    };
    expect(await service.create(pokemon)).toEqual(pokemon);
    expect(repository.save).toHaveBeenCalledWith(pokemon);
  });

  it('should call the findAll method and return all pokemons', async () => {
    const mockPokemons = [
      {
        id: 1,
        name: 'toto',
        types: [{ id: 2, name: 'Feu', pokemons: [] }],
        description: 'Electric type pokemon',
        imageUrl: 'https://test.image',
      },
      {
        id: 2,
        name: 'titi',
        types: [{ id: 3, name: 'Eau', pokemons: [] }],
        description: 'Eau type pokemon',
        imageUrl: 'https://test.image2',
      },
    ];
    jest.spyOn(repository, 'find').mockResolvedValue(mockPokemons);
    expect(await service.findAll()).toEqual(mockPokemons);
    expect(repository.find).toHaveBeenCalled();
  });

  it('should call the findByName method and return the pokemon', async () => {
    const pokemon: Pokemons = {
      id: 1,
      name: 'Pikachu',
      types: [{ id: 1, name: 'Electric', pokemons: [] }],
      description: 'Electric type pokemon',
      imageUrl: 'https://pokeapi.co/api/v2/pokemon/25/',
    };
    jest.spyOn(repository, 'findOne').mockResolvedValue(pokemon);
    expect(await service.findByName('Pikachu')).toEqual(pokemon);
    expect(repository.findOne).toHaveBeenCalledWith({
      where: { name: 'Pikachu' },
    });
  });
});
