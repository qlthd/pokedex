import React from 'react';
import { Card, Chip } from '@mui/material';
import {
  PokecardProps,
  PokemonTypeColors,
} from '@/components/molecules/Pokecard/Pokecard.types';

export const Pokecard = (props: PokecardProps) => {
  const { name, id, imageUrl, types, description } = props;

  const getPokemonTypeColor = (type: string) => {
    const color = PokemonTypeColors[type as keyof typeof PokemonTypeColors];
    return color;
  };

  return (
    <Card className="w-full max-w-md rounded-xl p-6">
      <div className="flex justify-between items-center">
        <div className="inline-flex gap-2">
          {types.map((type) => (
            <div
              className={`rounded-md ${getPokemonTypeColor(type.name)} py-1 px-3 border border-transparent text-sm text-black transition-all shadow-sm`}>
              {type.name}
            </div>
          ))}
        </div>
        <p className="mx-2 font-semibold">#{id}</p>
      </div>

      <h2 className="text-2xl font-semibold my-2">{name}</h2>
      <div className="flex justify-between items-center gap-8">
        <span>
          {description}
        </span>
        <img src={imageUrl} alt={name} width={150} />
      </div>
    </Card>
  );
};

export default Pokecard;
