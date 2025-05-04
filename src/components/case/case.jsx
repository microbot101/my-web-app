import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './case.css'

const Case = () => {
  const [cases, setCases] = useState([]);
  const scrollRef = useRef(null); // Ref for scrolling container

  useEffect(() => {
    axios.get('http://localhost:5000/content')
      .then(res => setCases(res.data))
      .catch(err => console.error(err));
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -1500, behavior: 'smooth' });
    }
  };

  const scrollRight = () => { 
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 1500, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div id='past' className="case mainSection">
        <h1>Past Colaboration's</h1>
        <div className="move-icon">
          <svg onClick={scrollLeft} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
          <svg onClick={scrollRight} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
        </div>

        <div className="case-content" ref={scrollRef}>
          {/* Each "brett" block */}
          <div className='brett'>
            <div className="content-txt">
              <section>
                <h2>“From Memes to Media” – BUZZ x BRETT Weekly News <span>29/03/2024</span></h2>
                <li>  800K+ total views on X</li>  
                <li>10+ custom video updates</li>
                <li> Elevated investor trust and engagement</li>
              </section>
              <p className="in">Buzz delivers weekly news videos that dive deep into price action, 
                  strategic partnerships, and market trends...</p>
            </div>
            <div className="content">
              <iframe
                src="https://www.youtube.com/embed/tXdqP6egSxI" 
                title="“Why Everyone’s Talking About Brett Meme Coin! 😲”"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className='brett'>
            <div className="content-txt">
              <section>
                <h2>Transforming Futures: Grok x Buzz Nigeria School Campaign <span>29/03/2024</span></h2>
                <li> $4,500 raised for the campaign</li>  
                <li>over 2M views across all platforms</li>
                <li>15% holder growth post-campaign</li>
                <li>1,000+ underprivileged children supported</li>
              </section>
              <p className="in">In March 2024, Buzz and Grok teamed up to bring real impact to rural schools in Nigeria...</p>
            </div>
            <div className="content">
              <iframe
                src="https://www.youtube.com/embed/ObbsIGA77l4"
                title="Grok School Campaign"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Case;
