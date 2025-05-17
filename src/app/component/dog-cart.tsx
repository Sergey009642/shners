'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { isDogLiked, toggleLikeDog } from "../dogs/utils/likes";

export interface DogCartProps {
  url: string;
  id: string;
}

export default function DogCart({ url, id }: DogCartProps) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(isDogLiked(id));
  }, [id]);

  const handleLike = () => {
    toggleLikeDog(id);
    setLiked(!liked);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden relative max-w-xs">
      <img
        src={url}
        alt="dog"
        className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
      />
      <button
        onClick={handleLike}
        className="absolute top-3 right-3 text-2xl"
        aria-label="Like dog"
      >
        <span className={liked ? "text-red-500" : "text-gray-400"}>♥</span>
      </button>
      <div className="p-5 flex flex-col justify-between h-36">
        <h2 className="text-lg font-bold text-gray-800 dark:text-white">Adorable Dog</h2>
        <Link
          href={`/dogs/${id}`}
          className="mt-4 inline-block text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
