export interface Filters {
  title: string;
  genre: string;
  minYear: string;
  maxYear: string;
  minRating: string;
}

interface MovieFiltersProps {
  filters: Filters;
  genres: string[];
  onChange: (filters: Filters) => void;
  onClear: () => void;
}

export function MovieFilters({ filters, genres, onChange, onClear }: MovieFiltersProps) {
  return (
    <div>
      <h2>Filters</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
        <input
          placeholder="Search title…"
          value={filters.title}
          onChange={(e) => onChange({ ...filters, title: e.target.value })}
          style={{ flex: '1 1 150px' }}
        />
        <select
          value={filters.genre}
          onChange={(e) => onChange({ ...filters, genre: e.target.value })}
          style={{ flex: '1 1 120px' }}
        >
          <option value="">All genres</option>
          {genres.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
        <input
          placeholder="Min year"
          type="number"
          value={filters.minYear}
          onChange={(e) => onChange({ ...filters, minYear: e.target.value })}
          style={{ flex: '1 1 90px' }}
        />
        <input
          placeholder="Max year"
          type="number"
          value={filters.maxYear}
          onChange={(e) => onChange({ ...filters, maxYear: e.target.value })}
          style={{ flex: '1 1 90px' }}
        />
        <input
          placeholder="Min rating"
          type="number"
          step="0.1"
          min="0"
          max="10"
          value={filters.minRating}
          onChange={(e) => onChange({ ...filters, minRating: e.target.value })}
          style={{ flex: '1 1 100px' }}
        />
        <button onClick={onClear}>Clear</button>
      </div>
    </div>
  );
}
