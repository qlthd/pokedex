export type PokecardProps = {
  name: string;
  pokedexId: number;
  imageUrl: string;
  types: PokemonType[];
};

type PokemonType = {
  name: string;
};

export enum PokemonTypeColors {
  Plante = 'bg-green-400',
  Poison = 'bg-purple-400',
  Feu = 'bg-red-400',
  Vol = 'bg-blue-400',
  Eau = 'bg-blue-400',
  Insecte = 'bg-green-400',
  Normal = 'bg-gray-400',
  Electrik = 'bg-yellow-400',
  Sol = 'bg-yellow-400',
  Fée = 'bg-pink-400',
  Combat = 'bg-red-400',
  Psy = 'bg-purple-400',
  Roche = 'bg-gray-400',
  Acier = 'bg-gray-400',
  Glace = 'bg-blue-400',
  ghost = 'bg-purple-400',
  dragon = 'bg-blue-400',
  dark = 'bg-gray-400',
}
