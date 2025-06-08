import React, { useEffect, useRef } from 'react';
import './TitleCards.css';
import Cards_data from '../../Cards_data';

const TitleCards = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
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
      <h2>Popular on Netflex</h2>
      <div className="card-list" ref={scrollRef}>
        {Cards_data.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.title} />
            <p>{card.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
