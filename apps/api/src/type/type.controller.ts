import { Controller, Get, Param } from '@nestjs/common';
import { TypeService } from './type.service';
import { Type } from './type';

@Controller('types')
export class TypeController {
  constructor(private readonly typeService: TypeService) {}

  @Get()
  async findAll(): Promise<Type[]> {
    return this.typeService.findAll();
  }

  @Get(':name')
  async findByName(@Param('name') name: string): Promise<Type | null> {
    return this.typeService.findByName(name);
  }
}
