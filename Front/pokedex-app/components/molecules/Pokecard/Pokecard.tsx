import React from 'react';
import { Card, Chip } from '@mui/material';
import Image from 'next/image';
import bulbi from '../../../public/bulbi.png';

export const Pokecard = () => {
  return (
    <Card className="w-full max-w-md rounded-xl p-6">
      <div className="flex justify-between items-center">
        <div className="inline-flex gap-2">
          <Chip label="Chip Filled" className="bg-green-400" />
          <Chip label="Chip Outlined" variant="outlined" />
        </div>
        <p className="mx-2 font-semibold">#001</p>
      </div>

      <h2 className="text-2xl font-semibold my-2">Bulbizarre</h2>
      <div className="flex justify-between items-center gap-8">
        <span>
          A strange seed was planted on its back at birth. the plant sprouts and grows
          with this pokémon.
        </span>
        <Image src={bulbi} alt="Bulbizarre" width={300} />
      </div>
    </Card>
  );
};

export default Pokecard;
