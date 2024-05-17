import React from 'react';
import MenuItem from './MenuItem';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { BiCameraMovie } from 'react-icons/bi';
import Link from 'next/link';
import DarkModeBtn from './DarkModeBtn';

function Header() {
  return (
    <div className="flex justify-between p-3 items-center  max-w-6xl mx-auto">
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center gap-4">
        <DarkModeBtn />
        <Link href="/" className="flex gap-1 items-center">
          <BiCameraMovie className="text-4xl hidden sm:inline" />
          <span className="text-3xl font-bold bg-amber-500 py-1 px-2 rounded-lg   ">
            WatchMe.
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
