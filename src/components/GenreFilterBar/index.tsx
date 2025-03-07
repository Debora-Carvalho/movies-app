'use client';

import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './genreFilterBar.scss';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

interface Genre {
  id: number;
  name: string;
}

interface GenreFilterBarProps {
  onGenreSelect: (genreId: number | null) => void;
}

function GenreFilterBar({ onGenreSelect }: GenreFilterBarProps) {
  const [genres, setGenres] = useState<Genre[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/genre/movie/list',
      params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        language: 'pt-BR',
      },
    }).then((response) => {
      setGenres(response.data.genres);
    });
  }, []);

  const scrollContainer = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className='genre-filter-bar'>
      <button className='nav-arrow left' onClick={() => scrollContainer('left')}>
        <MdOutlineKeyboardArrowLeft />
      </button>
      <div className='genre-container' ref={containerRef}>
        <button className='genre-button' onClick={() => onGenreSelect(null)}>
          Todos
        </button>
        {genres.map((genre) => (
          <button
            key={genre.id}
            className='genre-button'
            onClick={() => onGenreSelect(genre.id)}
          >
            {genre.name}
          </button>
        ))}
      </div>
      <button className='nav-arrow right' onClick={() => scrollContainer('right')}>
        <MdOutlineKeyboardArrowRight />
      </button>
    </div>
  );
}

export default GenreFilterBar;
