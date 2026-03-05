import { useEffect, useState } from 'react';
import type { Movie } from '../types/Movie';
import type { Filters } from '../components/MovieFilters';

const EMPTY_FILTERS: Filters = { title: '', genre: '', minYear: '', maxYear: '', minRating: '' };

export function useMovies(apiBase: string) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS);

  useEffect(() => {
    fetch(`${apiBase}/api/movies`)
      .then((res) => res.json())
      .then(setMovies)
      .catch(() => setError('Failed to fetch movies'));
  }, [apiBase]);

  const genres = Array.from(new Set(movies.map((m) => m.genre))).sort();

  const filteredMovies = movies.filter((movie) => {
    if (filters.title && !movie.title.toLowerCase().includes(filters.title.toLowerCase())) return false;
    if (filters.genre && movie.genre !== filters.genre) return false;
    if (filters.minYear && movie.year < Number(filters.minYear)) return false;
    if (filters.maxYear && movie.year > Number(filters.maxYear)) return false;
    if (filters.minRating && movie.rating < Number(filters.minRating)) return false;
    return true;
  });

  const addMovie = (movie: Movie) => setMovies((prev) => [...prev, movie]);

  const clearFilters = () => setFilters(EMPTY_FILTERS);

  return {
    filteredMovies,
    genres,
    error,
    setError,
    filters,
    setFilters,
    clearFilters,
    addMovie,
  };
}
