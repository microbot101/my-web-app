// CryptoTicker.js
import React from 'react';
import './news.css';
import NewsSection from './newsCard/newsCard.jsx';
import NewsPage from './newspage/newspage.jsx';
import YouTubeSection from './youtube/youtube.jsx'

const News = () => {
  return (
    <div className="news">
      <NewsSection />
      <NewsPage />
     <YouTubeSection />
    </div>
  );
};

export default News;
