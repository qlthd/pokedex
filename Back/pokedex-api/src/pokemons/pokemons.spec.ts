import { Pokemons } from './pokemons';

describe('Pokemons', () => {
  it('should be defined', () => {
    expect(new Pokemons()).toBeDefined();
  });
});
