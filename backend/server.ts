import express from 'express';
import cors from 'cors';

const movies = [
    { id: 1, title: 'Inception',       year: 2010, genre: 'Science-Fiction', rating: 8.8 },
    { id: 2, title: 'The Dark Knight',  year: 2008, genre: 'Action',          rating: 9.0 },
    { id: 3, title: 'Interstellar',     year: 2014, genre: 'Science-Fiction', rating: 8.6 },
    { id: 4, title: 'Pulp Fiction',     year: 1994, genre: 'Crime',           rating: 8.9 },
    { id: 5, title: 'The Matrix',       year: 1999, genre: 'Science-Fiction', rating: 8.7 },
];

const app = express();

app.use(cors());

app.get('/api/movies', (req, res) => {
    res.json(movies);
});

app.get('/api/movies/:id', (req, res) => {
    const movieId = parseInt(req.params.id, 10);
    const movie = movies.find(m => m.id === movieId);
    if (movie) {
        res.json(movie);
    } else {
        res.status(404).json({ error: 'Movie not found' });
    }
});

app.post('/api/movies', express.json(), (req, res) => {
    const { title, year, genre, rating } = req.body;
    if (title && year && genre && rating) {
        const newMovie = {
            id: movies.length + 1,
            title,
            year,
            genre,
            rating
        };
        movies.push(newMovie);
        res.status(201).json(newMovie);
    } else {
        res.status(400).json({ error: 'Missing required fields' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});