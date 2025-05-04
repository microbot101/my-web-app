import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './newspage.css'; // Ensure this file is in the same directory
import logo from '../../images/blklogo.png';

const NewsCard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://newsdata.io/api/1/news',
          {
            params: {
              apikey: 'pub_75819033c0900ca37c21c5eb4325a998f5c46', // Replace with your actual API key
              country: 'us',
              category: 'business',
              language: 'en',
            },
          }
        );
        setArticles(response.data.results);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="new-grid-global">
      {articles.map((article, index) => (
        <div key={index} className="news-card-global">
        <div className="news-profile-global">
              <section>
                <img src={logo} alt="" />
                <h1>Buzz ☀️<br /> <span>@We_Are_Buzz</span></h1>
              </section>
              <button className="news_btn">NEWS</button>
            </div>
          <div className="image-container-global">
            {article.image_url && (
              <img
                src={article.image_url}
                alt={article.title}
                className="news-image-global"
              />
            )}
            <div className="gradient-overlay"></div>
          </div>
          <div className="news-content-global">
            <h2>{article.title}</h2>
            <p>{article.description?.slice(0, 100)}...</p>
           
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
