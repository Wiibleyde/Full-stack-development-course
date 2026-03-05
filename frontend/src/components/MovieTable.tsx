import React from 'react';
import type { Movie } from '../types/Movie';

interface MovieTableProps {
  movies: Movie[];
}

export function MovieTable({ movies }: MovieTableProps) {
  return (
    <div>
      <p style={{ color: '#666', marginBottom: '0.5rem' }}>
        {movies.length} movie{movies.length !== 1 ? 's' : ''}
      </p>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ccc', textAlign: 'left' }}>
            <th style={{ padding: '0.5rem' }}>#</th>
            <th style={{ padding: '0.5rem' }}>Title</th>
            <th style={{ padding: '0.5rem' }}>Year</th>
            <th style={{ padding: '0.5rem' }}>Genre</th>
            <th style={{ padding: '0.5rem' }}>Rating</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '0.5rem' }}>{movie.id}</td>
              <td style={{ padding: '0.5rem' }}>{movie.title}</td>
              <td style={{ padding: '0.5rem' }}>{movie.year}</td>
              <td style={{ padding: '0.5rem' }}>{movie.genre}</td>
              <td style={{ padding: '0.5rem' }}>{movie.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
