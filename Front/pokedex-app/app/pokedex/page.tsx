import Navbar from '@/components/organisms/Navbar/Navbar';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Pokecard from '@/components/molecules/Pokecard/Pokecard';
import Image from 'next/image';
import pokedex from '../../public/pokedex.svg';

const Page = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center my-8">
        <Image src={pokedex} alt="Bulbizarre" height={100} />
      </div>
      <div className="mx-auto w-full max-w-3xl my-10 grid grid-cols-10 items-center gap-2">
        <TextField
          variant="outlined"
          className="shadow-lg col-span-9"
          placeholder="Search Pokemon"
        />
        <div className="bg-red-500 rounded-md p-1 flex items-center justify-center col-span-1 px-7 py-4 shadow-lg">
          <SearchIcon className="text-white" />
        </div>
      </div>
      <div className="mx-auto w-full max-w-3xl grid grid-cols-2 gap-4">
        <Pokecard />
        <Pokecard />
      </div>
    </div>
  );
};

export default Page;
