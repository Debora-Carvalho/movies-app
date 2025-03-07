'use client';

import { useEffect, useState } from 'react';
import './movieList.scss';
import axios from 'axios';
import MovieCard from '../MovieCard';
import { Movie } from '@/types/movie';
import GenreFilterBar from '../GenreFilterBar';

function MovieList() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [selectedGenre, setSelectedGenre] = useState<number | null>(null);

    useEffect(() => {
        getMovies();
    }, [selectedGenre]);

    const getMovies = () => {
        axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
                language: 'pt-BR',
                with_genres: selectedGenre || undefined,
            }
        }).then(response => {
            setMovies(response.data.results);
        });
    }

    return (
        <div>
            <GenreFilterBar onGenreSelect={setSelectedGenre} />
            <ul className='movie-list'>
                {movies.map((movie) =>
                    <MovieCard 
                        key={movie.id}
                        movie={movie}
                    />
                )}
            </ul>
        </div>
    );
}

export default MovieList;
