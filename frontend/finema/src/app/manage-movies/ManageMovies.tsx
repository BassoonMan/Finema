
'use client'
import React, { useState } from 'react';
import styles from './ManageMovies.module.css'
import TopBar from '../components/TopBar';
import Button from '../components/Button';


export default function ManageMovies() {

  interface Movie {
    title: string;
    category: string;
    director: string;
    producer: string;
    trailerVideo: string;
    mpaaRating: string;
    trailerPicture: string;
    synopsis: string;
  }

  const [showtime, setShowtime] = useState("");
  const [date, setDate] = useState("");
  const [msg, setMsg] = useState("");
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [cast, setCast] = useState('');
  const [director, setDirector] = useState('');
  const [producer, setProducer] = useState('');
  const [trailerVideo, setTrailerVideo] = useState('');
  const [trailerPicture, setTrailerPicture] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [mpaaRating, setMpaaRating] = useState('');


  const handleShowtime = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowtime(event.target.value);
  };

  const [nowPlaying, setNowPlaying] = useState(false);

  const handleNowPlaying = (value:boolean) => {
    console.log(value)
    setNowPlaying(value);
  };

  const [comingSoon, setComingSoon] = useState(false);

  const handleComingSoon = (value:boolean) => {
    console.log(value)
    setComingSoon(value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log(nowPlaying)
    const movie = {
      title,
      category,
      director,
      producer,
      trailerVideo,
      mpaaRating,
      trailerPicture,
      synopsis,
      nowPlaying,
      comingSoon,
    };
    console.log(movie.nowPlaying)
    try {
      //const response = await fetch(`http://localhost:8080/movies/search?query=${query}`);

      const response = await fetch(`http://localhost:8080/movies/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer t3klslescdsewe`,
        },
        body: JSON.stringify(movie),
      });

      if (!response.ok) {
        console.log(response);
        throw new Error('Network response was not ok');
      } else {
        console.log("response is ok");
      }

      const data = await response.json();
      console.log('Movie added:', data);
      setMsg('Movie added successfully!');
      // Reset form fields
      setTitle('');
      setCategory('');
      setDirector('');
      setProducer('');
      setTrailerVideo('');
      setTrailerPicture('');
      setSynopsis('');
      setMpaaRating('');
    } catch (error) {
      console.error('Error adding movie:', error);
      setMsg('Error adding movie.');
    }
  };

  return (
    <div>
      <div className={styles.top}>
        <TopBar loggedIn={true} showEditProfile={false}/>
      </div>
      <section className={styles.main_body}>
        <section className={styles.movie_info}>
          <form onSubmit={handleSubmit}>
            <div className={styles.input_section}>
              <h1> Movie Title </h1>
              <input value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div className={styles.input_section}>
              <h1> Category </h1>
              <input value={category} onChange={(e) => setCategory(e.target.value)} required />
            </div>
            <div className={styles.input_section}>
              <h1> Synopsis </h1>
              <input value={synopsis} onChange={(e) => setSynopsis(e.target.value)} required />
            </div>
            <div className={styles.input_section}>
              <h1> Director </h1>
              <input value={director} onChange={(e) => setDirector(e.target.value)} required />
            </div>
            <div className={styles.input_section}>
              <h1> Producer </h1>
              <input value={producer} onChange={(e) => setProducer(e.target.value)} required />
            </div>
            <div className={styles.input_section}>
              <h1> Trailer Video (video link) </h1>
              <input value={trailerVideo} onChange={(e) => setTrailerVideo(e.target.value)} required />
            </div>
            <div className={styles.input_section}>
              <h1> MPAA-US film rating code </h1>
              <input value={mpaaRating} onChange={(e) => setMpaaRating(e.target.value)} required />
            </div>
            <div className={styles.input_section}>
              <h1> Trailer Picture (image link) </h1>
              <input value={trailerPicture} onChange={(e) => setTrailerPicture(e.target.value)} required />
            </div>
            <div>
              <h1>Now Playing</h1>
              <input
                type="checkbox"
                value='true'
                checked={nowPlaying === true}
                onChange={() => handleNowPlaying(true)}
              />
            </div>
            <div>
              <h1>Coming Soon</h1>
                <input
                  type="checkbox"
                  value='true'
                  checked={comingSoon === true}
                  onChange={() => handleComingSoon(true)}
               />
            </div>
            <Button type='submit'> Add Movie </Button>
          </form>
          {msg && <p>{msg}</p>}
        </section>
        <h1> lists all movies in database with option to edit or delete </h1>
        <section>
          {/* TODO: Implement movie list with edit and delete options */}
        </section>
      </section>
    </div>
  );
};