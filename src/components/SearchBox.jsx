'use client';
import React, { useState } from 'react';

function SearchBox() {
  const [search, setSearch] = useState('');

  return (
    <form className="flex max-w-6 justify-between px-5 ">
      <input
        type="text"
        placeholder="Seach Keywords..."
        className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="text-amber-600 disabled:text-gray-400"
        disabled={search === ''}
        // onClick={() => setSearch()}
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;
