'use client'
import React, { useState, useEffect } from 'react';
//import { useRouter } from 'next/navigation'
//import Button from '../components/Button'
import MovieCard from './MovieCard';
import styles from './NowPlaying.module.css'

interface MovieCardProps {
  title: string;
  trailerPicture: string;
  id: number; 
  synopsis: string;
  director: string;
  producer: string;
  mpaaRating: string;
  cast: string;
}

export default function NowPlaying() {
  //const router = useRouter()
  
  /*const handleSignUp = () => {
    router.push('/registration')
  }
  const handleLogIn = () => {
    router.push('/loggedin-user-home')
  }*/

  const [nowShowingMovies, setNowShowingMovies] = useState<MovieCardProps[]>([]);
  
    // fetch coming soon movies from backend
    useEffect(() => {
      const fetchNowShowingMovies = async () => {
        try {
          const response = await fetch('http://localhost:8080/movies/now-showing');
          const data = await response.json();
          setNowShowingMovies(data);
        } catch (error) {
          console.error("Error fetching now showing movies:", error);
        }
      };
  
      fetchNowShowingMovies();
    }, []);
  

  return (
    <div className={styles.main_body}>
      <h1 className={styles.header}>Now Playing</h1>
      <section className={styles.grid_container}>
        {nowShowingMovies.length > 0 ? (
          nowShowingMovies.map((movie) => (
            <div key={movie.id} className={styles.grid_item}>
              <MovieCard 
                name={movie.title} 
                source={movie.trailerPicture} 
                movieId={movie.id} 
                mpaaRating={movie.mpaaRating}
                synopsis={movie.synopsis}
                director={movie.director}
                producer={movie.producer}
                cast={movie.cast}
              />
            </div>
          ))
        ) : (
          <p>No movies available at the moment.</p>
        )}
      </section>
    </div>
  );
};
