import React from 'react';
import { Card, Chip } from '@mui/material';
import Image from 'next/image';
import bulbi from '../../../public/bulbi.png';
import {
  PokecardProps,
  PokemonTypeColors,
} from '@/components/molecules/Pokecard/Pokecard.types';

export const Pokecard = (props: PokecardProps) => {
  const { name, pokedexId, imageUrl, types } = props;
  const getPokemonTypeColor = (type: string) => {
    return PokemonTypeColors[type as keyof typeof PokemonTypeColors];
  };
  console.log(types);
  return (
    <Card className="w-full max-w-md rounded-xl p-6">
      <div className="flex justify-between items-center">
        <div className="inline-flex gap-2">
          {types.map((type) => (
            <Chip
              label={type.name}
              className={getPokemonTypeColor(type.name)}
              key={type.name}
            />
          ))}
        </div>
        <p className="mx-2 font-semibold">#{pokedexId}</p>
      </div>

      <h2 className="text-2xl font-semibold my-2">{name}</h2>
      <div className="flex justify-between items-center gap-8">
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </span>
        <img src={imageUrl} alt={name} width={150} />
      </div>
    </Card>
  );
};

export default Pokecard;
