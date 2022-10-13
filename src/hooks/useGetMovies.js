import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const useGetMovies = () => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/discover/movie?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }&sort_by=popularity.desc&include_adult=false&page=1`,
    fetcher
  );

  return {
    movies: data?.results,
    isLoading: !error && !data,
    isError: error,
  };
};
