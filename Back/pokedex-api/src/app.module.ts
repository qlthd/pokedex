import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from './pokemon/pokemon';
import { PokemonsModule } from './pokemons/pokemons.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [Pokemon],
      synchronize: true,
    }),
    PokemonsModule,
  ],
})
export class AppModule {}
