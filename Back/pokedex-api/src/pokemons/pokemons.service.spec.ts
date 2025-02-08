import { Test, TestingModule } from '@nestjs/testing';
import { PokemonsService } from './pokemons.service';
import { Pokemons } from './pokemons';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

const mockPokemonsRepository = {
  save: jest.fn().mockImplementation((pokemon) => Promise.resolve(pokemon)),
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
    };
    expect(await service.create(pokemon)).toEqual(pokemon);
    expect(repository.save).toHaveBeenCalledWith(pokemon);
  });
});
