'use client';

import { useEffect, useState } from 'react';
import './movieList.scss';
import axios from 'axios';
import MovieCard from '../MovieCard';
import { Movie } from '@/types/movie';

function MovieList() {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        getMovies();
    }, [])

    const getMovies = () => {
        axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: 'b5373f1282913f8afbb916ad36eb6f85',
                language: 'pt-BR'
            }
        }).then(response => {
            setMovies(response.data.results);
        });
    }

    return (
        <ul className='movie-list'>
            {movies.map((movie) =>
                <MovieCard 
                    key={movie.id}
                    movie={movie}
                />
            )}
        </ul>
    );
}

export default MovieList;