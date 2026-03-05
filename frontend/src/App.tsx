import { MovieFilters } from './components/MovieFilters';
import { MovieTable } from './components/MovieTable';
import { AddMovieForm } from './components/AddMovieForm';
import { useMovies } from './hooks/useMovies';

const API_BASE = 'http://localhost:3000';

function App() {
  const { filteredMovies, genres, error, setError, filters, setFilters, clearFilters, addMovie } = useMovies(API_BASE);

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 700, margin: '2rem auto', padding: '0 1rem' }}>
      <h1>Movies</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <MovieFilters
        filters={filters}
        genres={genres}
        onChange={setFilters}
        onClear={clearFilters}
      />

      <MovieTable movies={filteredMovies} />

      <AddMovieForm
        apiBase={API_BASE}
        onAdd={addMovie}
        onError={setError}
      />
    </div>
  );
}

export default App;
