import React, { useState } from 'react';
import './Home.css';
import Navbar from '../../Components/Navbar/Navbar.jsx';
import TitleCards from '../../Components/TitleCards/TitleCards.jsx';
import hero_banner from '../../assets/posters/ballerina-movie.jpg';

const Home = () => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <>
    <div className='home'>
      <Navbar />
      <div className="hero">
        {playVideo ? (
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/yNN2PoilSp4?autoplay=1"
              title="Ballerina Trailer"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <img src={hero_banner} alt="hero-banner" className='banner-img' />
        )}

        <div className="hero-caption">
          <h1>Ballerina</h1>
          <p>A young girl from a rural town pursues her dream of becoming a ballerina in the big city, facing challenges with grace and determination.</p>
          <div className="hero-buttons">
            <button className="play-btn" onClick={() => setPlayVideo(true)}>▶ Play</button>
            <button className="more-btn">ℹ More Info</button>
          </div>
        </div>
      </div>
    </div>
    <div className="hero-cards-wrapper">
      <TitleCards/>
    </div>
    </>
  );
};

export default Home;