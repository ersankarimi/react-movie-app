import ratingStar from "/src/assets/images/rating-star.svg";

import React from "react";

export const MovieCard = ({ title, poster_path, vote_average }) => {
  return (
    <div className="relative bg-gray-800/50 backdrop-blur-3xl p-4 rounded-lg h-auto flex flex-col justify-around">
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt=""
          className=" h-auto rounded-md aspect-auto hover:scale-105 transition-all duration-200"
        />
        <div className="bg-black/75 rounded-md p-2 absolute top-2 left-2 flex items-center justify-center gap-2">
          <img src={ratingStar} alt="" className="w-4 h-4" />
          <h3 className="text-[#FFAD49] text-base">{vote_average}</h3>
        </div>
      </div>
      <h3 className="font-semibold text-gray-100 text-xl mt-8">{title}</h3>
    </div>
  );
};
