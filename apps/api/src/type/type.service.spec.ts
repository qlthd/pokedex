import { Test, TestingModule } from '@nestjs/testing';
import { TypeService } from './type.service';
import { Type } from './type';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

const mockTypeRepository = {
  find: jest.fn(),
  findOne: jest.fn(),
};

describe('TypeService', () => {
  let service: TypeService;
  let repository: Repository<Type>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TypeService,
        {
          provide: getRepositoryToken(Type),
          useValue: mockTypeRepository,
        },
      ],
    }).compile();

    service = module.get<TypeService>(TypeService);
    repository = module.get<Repository<Type>>(getRepositoryToken(Type));
  });

  it('should call the findAll method and return all types', async () => {
    const mockTypes = [
      { id: 1, name: 'Plante', pokemons: [] },
      { id: 2, name: 'Feu', pokemons: [] },
    ];
    jest.spyOn(repository, 'find').mockResolvedValue(mockTypes);
    expect(await service.findAll()).toEqual(mockTypes);
    expect(repository.find).toHaveBeenCalled();
  });

  it('should call the findByName method and return the type', async () => {
    const type: Type = {
      id: 1,
      name: 'Plante',
      pokemons: [],
    };
    jest.spyOn(repository, 'findOne').mockResolvedValue(type);
    expect(await service.findByName('Plante')).toEqual(type);
    expect(repository.findOne).toHaveBeenCalledWith({
      where: { name: 'Plante' },
    });
  });
});
