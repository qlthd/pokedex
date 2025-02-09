import React from 'react';
import Link from 'next/link';
import logo from '../../../public/pokedex.svg';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-yellow sticky top-0 shadow-md">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Image src={logo} alt="Logo" width={100} height={100} />
            <ul className="hidden md:flex gap-x-6 text-black">
              <li>
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/pokedex">
                  <p>Pokedex</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
