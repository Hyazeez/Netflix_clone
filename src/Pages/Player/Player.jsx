import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Player.css';
import BackArrowIcon from '../../assets/back.png';

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YzIwZjg1N2IyODQ0YmNiOGI2NGFiMDNjNjBhZTU3NyIsIm5iZiI6MTc0OTU3ODQzMC43NzksInN1YiI6IjY4NDg3MmJlZjk0ODFkZTRmODM0MmVhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nqToPql0qVwIOB5-YPMt9bY6504ObEnzZ17BDNGrcjw'
    }
  };

  useEffect(() => {
    setLoading(true);
    setError(false);

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => {
        const trailer = res.results?.find(
          video => video.site === "YouTube" && video.type === "Trailer"
        );

        if (trailer) {
          setApiData(trailer);
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className='player'>
      <img
        src={BackArrowIcon}
        alt="Back"
        onClick={() => navigate(-1)}
        className="back-icon"
      />

      {loading && <div className="spinner"></div>}

      {!loading && error && <p style={{ color: 'red' }}>Trailer not available</p>}

      {!loading && !error && (
        <div className={`video-wrapper fade-in`}>
          <iframe
            src={`https://www.youtube.com/embed/${apiData.key}`}
            title="YouTube Trailer"
            className="video-iframe"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {!loading && apiData && (
        <div className="player-info">
          <p>{apiData.name}</p>
          <p>{apiData.published_at?.slice(0, 10)}</p>
          <p>{apiData.type}</p>
        </div>
      )}
    </div>
  );
};

export default Player;
