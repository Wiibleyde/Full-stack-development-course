import { useState } from 'react';
import type { Movie } from '../types/Movie';

interface AddMovieFormProps {
  apiBase: string;
  onAdd: (movie: Movie) => void;
  onError: (message: string) => void;
}

export function AddMovieForm({ apiBase, onAdd, onError }: AddMovieFormProps) {
  const [form, setForm] = useState({ title: '', year: '', genre: '', rating: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(`${apiBase}/api/movies`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: form.title,
          year: Number(form.year),
          genre: form.genre,
          rating: Number(form.rating),
        }),
      });
      if (!res.ok) throw new Error('Failed to add movie');
      const newMovie: Movie = await res.json();
      onAdd(newMovie);
      setForm({ title: '', year: '', genre: '', rating: '' });
    } catch {
      onError('Failed to add movie');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Add a Movie</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: 400 }}>
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <input
          placeholder="Year"
          type="number"
          value={form.year}
          onChange={(e) => setForm({ ...form, year: e.target.value })}
          required
        />
        <input
          placeholder="Genre"
          value={form.genre}
          onChange={(e) => setForm({ ...form, genre: e.target.value })}
          required
        />
        <input
          placeholder="Rating (0-10)"
          type="number"
          step="0.1"
          min="0"
          max="10"
          value={form.rating}
          onChange={(e) => setForm({ ...form, rating: e.target.value })}
          required
        />
        <button type="submit" disabled={submitting}>
          {submitting ? 'Adding…' : 'Add Movie'}
        </button>
      </form>
    </div>
  );
}
