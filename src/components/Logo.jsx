import React from 'react';
import Link from 'next/link';
import { BiCameraMovie } from 'react-icons/bi';

function Logo() {
  return (
    <Link href="/" className="flex gap-1 items-center">
      <BiCameraMovie className="text-4xl hidden sm:inline" />
      <span className="text-3xl font-bold bg-amber-500 py-1 px-2 rounded-lg   ">
        WatchMe.
      </span>
    </Link>
  );
}

export default Logo;
