import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonsModule } from './pokemons/pokemons.module';
import { Pokemons } from './pokemons/pokemons';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Type } from './type/type';
import { TypeModule } from './type/type.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'pokemon-app',
      entities: [Pokemons, Type],
      synchronize: true,
    }),
    PokemonsModule,
    TypeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
