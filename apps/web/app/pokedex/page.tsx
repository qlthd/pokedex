'use client';
import Navbar from '@/components/organisms/Navbar/Navbar';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Pokecard from '@/components/molecules/Pokecard/Pokecard';
import Image from 'next/image';
import pokedex from '../../public/pokedex.svg';
import { useEffect, useState, useCallback } from 'react';
import { fetchUrl } from '@/api/apicall';
import { debounce } from '@/shared/utils';

const Page = () => {
  const [fetchedPokemons, setFetchedPokemons] = useState([]);

  const fetchPokemon = async (name?: string) => {
    try {
      const data = await fetchUrl(`pokemons${name ? `/${name}` : ''}`);
      setFetchedPokemons(data);
    } catch (error) {
      setFetchedPokemons([]);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const debouncedSearch = useCallback(debounce((event: any) => {
    fetchPokemon(event.target.value);
  }, 800), []);

  const onSearchTextChange = (event: any) => {
    debouncedSearch(event);
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center my-8">
        <Image src={pokedex} alt="Bulbizarre" height={100} />
      </div>
      <div className="mx-auto w-full max-w-3xl my-10 grid grid-cols-10 items-center gap-2">
        <TextField
          variant="outlined"
          className="shadow-lg col-span-9 bg-white rounded-md"
          placeholder="Search Pokemon"
          onChange={onSearchTextChange}
        />
        <div className="bg-red-500 rounded-md p-1 flex items-center justify-center col-span-1 px-7 py-4 shadow-lg">
          <SearchIcon className="text-white" />
        </div>
      </div>
      <div className="mx-auto w-full max-w-3xl grid grid-cols-2 gap-4">
        {fetchedPokemons.map((pokemon: any) => (
          <Pokecard
            key={pokemon.id}
            name={pokemon.name}
            id={pokemon.id}
            imageUrl={pokemon.imageUrl}
            description={pokemon.description}
            types={pokemon.types.map((type: { name: string }) => ({ name: type.name }))}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
