import { SearchField, MovieCard, Loading } from "/src/components";
import logo from "/src/assets/images/logo.svg";
import { useGetMovies } from "/src/hooks";

import { Link } from "react-router-dom";
import React from "react";

export const Root = () => {
  const { movies, isLoading, isError } = useGetMovies();

  const renderElement = () => {
    if (isLoading) return <Loading />;
    if (isError) return <Loading />;

    return movies.map((movie) => <MovieCard key={movie.id} {...movie} />);
  };

  return (
    <>
      <header className="py-5 px-5 md:px-12 lg:px-16 xl:px-24 bg-main-color/70 backdrop-blur-3xl fixed left-0 top-0 right-0 z-50">
        <Link to={"/"}>
          <img src={logo} alt="Logo Icon" className="h-auto w-12" />
        </Link>
      </header>

      <main className="py-5 px-5 md:px-12 md:mx-8 lg:mx-12 lg:px-16 xl:px-24 xl:mx-16 mt-24">
        <section className="flex flex-col lg:w-[80%] xl:w-1/2 2xl:w-1/3">
          <h1 className="text-4xl md:text-5xl lg:text-6xl my-2 font-bold">
            Movieskuy
          </h1>
          <p className="my-1 text-gray-100/80">
            Search and find your favorite movie from the results below😉
          </p>
          <SearchField />
        </section>

        <section className="mt-20">
          <h2 className="text-2xl font-semibold text-gray-600">
            Movies<sub>({movies?.length ?? 0})</sub>
          </h2>

          <div className="md:grid flex md:flex-none sm:justify-between flex-col items-center overflow-hidden grid-cols-1 auto-rows-auto gap-4 sm:gird-cols-3 md:grid-cols-4 mt-8">
            {renderElement()}
          </div>
        </section>
      </main>
    </>
  );
};
