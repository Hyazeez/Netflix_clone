import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Player.css';
import BackArrowIcon from '../../assets/back.png';

const Player = () => {
  const { id } = useParams();

  const [apiData, setApiData] = useState({
    name: '',
    key: '',
    published_at: '',
    type: ''
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YzIwZjg1N2IyODQ0YmNiOGI2NGFiMDNjNjBhZTU3NyIsIm5iZiI6MTc0OTU3ODQzMC43NzksInN1YiI6IjY4NDg3MmJlZjk0ODFkZTRmODM0MmVhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nqToPql0qVwIOB5-YPMt9bY6504ObEnzZ17BDNGrcjw'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => {
        if (res.results && res.results.length > 0) {
          setApiData(res.results[0]);
        }
      })
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div className='player'>
      <h1 style={{ color: 'white' }}>Movie ID: {id}</h1>
      <img src={BackArrowIcon} alt="Back" />
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`} title="YouTube-Trailer" frameBorder="0" allowFullScreen width="100%" height="100%" className='video-iframe'></iframe>
      <div className="player-info">
        <p>{apiData.name}</p>
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player