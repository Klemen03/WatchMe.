import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { LuThumbsUp } from 'react-icons/lu';

function Card({ result }) {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          alt=""
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-55 transition-opacity duration-300"
        />
        <div className="p-2">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className="text-lg font-bold truncate py-2 text-amber-500">
            {result.title || result.name}
          </h2>
          <p className="flex items-center">
            {result.release_date || result.first_air_date}
            <LuThumbsUp
              className="h-5 mr-1 ml-5"
              fill="green"
              color="lightgreen"
            />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
