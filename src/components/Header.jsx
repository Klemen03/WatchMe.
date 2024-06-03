import React from 'react';
import MenuItem from './MenuItem';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';

import DarkModeBtn from './DarkModeBtn';
import Logo from './Logo';

function Header() {
  return (
    <div className="flex justify-between p-3 items-center  max-w-6xl mx-auto">
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center gap-5">
        <DarkModeBtn />
        <Logo />
      </div>
    </div>
  );
}

export default Header;
