import React from 'react';
import NavbarItem from './NavbarItem';

function Navbar() {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-100 font-bold p-4 lg:text-xl justify-center gap-6 mx-auto  border-2 border-yellow-300 w-full max-w-6xl">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}

export default Navbar;
