import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Type } from './type';

@Injectable()
export class TypeService {
  constructor(
    @InjectRepository(Type)
    private readonly typesRepository: Repository<Type>,
  ) {}

  async findAll(): Promise<Type[]> {
    return this.typesRepository.find();
  }

  async findByName(name: string): Promise<Type | null> {
    return this.typesRepository.findOne({ where: { name } });
  }
}
