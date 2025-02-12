import { Test, TestingModule } from '@nestjs/testing';
import { TypeController } from './type.controller';
import { Type } from './type';
import { TypeService } from './type.service';

describe('TypeController', () => {
  let controller: TypeController;
  let service: TypeService;

  const typeService = {
    findAll: jest.fn(),
    findByName: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeController],
      providers: [{ provide: TypeService, useValue: typeService }],
    }).compile();

    controller = module.get<TypeController>(TypeController);
    service = module.get<TypeService>(TypeService);
  });

  it('should call the findAll method and return all types', async () => {
    const mockTypes = [
      { id: 1, name: 'toto', pokemons: [] },
      { id: 2, name: 'titi', pokemons: [] },
    ];
    jest.spyOn(service, 'findAll').mockResolvedValue(mockTypes);
    expect(await controller.findAll()).toEqual(mockTypes);
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should call the findByName method and return the type', async () => {
    const type: Type = {
      id: 1,
      name: 'Plante',
      pokemons: [],
    };
    jest.spyOn(service, 'findByName').mockResolvedValue(type);
    expect(await controller.findByName('Plante')).toEqual(type);
    expect(service.findByName).toHaveBeenCalledWith('Plante');
  });
});
