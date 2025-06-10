import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
import Cards_data from '../../Cards_data';

const TitleCards = ({title, category}) => {
  const[apiData, setApiData] = useState([]);
  const scrollRef = useRef(null);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YzIwZjg1N2IyODQ0YmNiOGI2NGFiMDNjNjBhZTU3NyIsIm5iZiI6MTc0OTU3ODQzMC43NzksInN1YiI6IjY4NDg3MmJlZjk0ODFkZTRmODM0MmVhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nqToPql0qVwIOB5-YPMt9bY6504ObEnzZ17BDNGrcjw'
    }
  };


  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        
        if (
          scrollRef.current.scrollLeft + scrollRef.current.offsetWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='titlecards'>
      <h2>{title ? title : "Popular on Netflex"}</h2>
      <div className="card-list" ref={scrollRef}>
        {apiData.map((card, index) => (
          <div className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt={card.title} />
            <p>{card.original_title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
