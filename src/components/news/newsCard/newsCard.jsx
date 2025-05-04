import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './newsCard.css';
import logo from '../../images/BUZZ white.png';
import TrendingNews from './trending/trendingNews.jsx';

const CRYPTOPANIC_API_KEY = process.env.REACT_APP_CoinPanic_API_KEY;

// Fetch top crypto news from CryptoPanic
const fetchCryptoNews = async () => {
  try {
    const response = await fetch(`/api/v1/posts/?auth_token=${CRYPTOPANIC_API_KEY}&public=true`);
    
    // Check if the response is OK
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Check if the response is JSON
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Expected JSON, but received something else.");
    }

    const data = await response.json();
    return data.results.slice(0, 10); // Limit to top 5 news items
  } catch (error) {
    console.error('Error fetching crypto news:', error);
    return []; // Return an empty array in case of an error
  }
}; 


const NewsCard = ({ newsItem }) => {
  
  return (
    <div className='news-card'>
    <div className="news-profile">
      <section>
        <img src={logo} alt="" />
        <h1>Buzz ☀️<br /> <span>@We_Are_Buzz</span></h1>
      </section>
      <button className="news_btn">NEWS</button>
    </div>
    <div className='news-content'>
      <h3>{newsItem.title}</h3>
      <p>
      <Link to={`/readMore/${encodeURIComponent(newsItem.url)}`}>Read more</Link>
    </p>
    </div>
    <img className='bg-logo' src={logo} alt="" />
    </div>
  );
};
 
const NewsSection = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      const articles = await fetchCryptoNews();
      setNews(articles);
    }
    loadNews();
  }, []);

  return (
    <>
    <div className="news-section">
      <div className='news-container'>
        <h2>🚀 Latest Crypto News</h2>
        <div className='news-scroll-wrapper'>
          {news.map((item) => (
            <NewsCard key={item.id} newsItem={item} />
          ))}
        </div>
      </div>
      {/*<div className="news-navbar">
        <ul>
          <li>Crypto News</li>
          <li>Political News</li>
          <li>Financial News</li>
          <li>Crypto Events</li>
        </ul>
      </div>*/}
      <TrendingNews />
    </div>
    </>
  );
  
};


export default NewsSection;
