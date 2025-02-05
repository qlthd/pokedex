import Image from 'next/image';
import Navbar from '@/app/components/Navbar/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="text-5xl text-center m-10">
        <span className="font-semibold">Find </span> all your favorite
        <span className="font-semibold"> Pokemon</span>
      </h1>
    </div>
  );
}
