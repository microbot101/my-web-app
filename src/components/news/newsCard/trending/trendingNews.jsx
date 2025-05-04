import React, { useEffect, useState } from 'react';
import './trendingNews.css';
import Event from './buzz_evnt/event.jsx'

const TrendingNews = () => {
  const [gainers, setGainers] = useState([]);
  const [losers, setLosers] = useState([]);
  const [memeCoins, setMemeCoins] = useState([]);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const res = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h'
        );
        const data = await res.json();

        const sorted = [...data].sort(
          (a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h
        );
        setGainers(sorted.slice(0, 3));
        setLosers(sorted.slice(-3).reverse());
      } catch (error) {
        console.error('Error fetching market data:', error);
      }
    };

    const fetchMemeCoins = async () => {
      try {
        const res = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=meme-token&order=market_cap_desc&per_page=3&page=1&sparkline=false&price_change_percentage=24h'
        );
        const data = await res.json();
        setMemeCoins(data);
      } catch (error) {
        console.error('Error fetching meme coins:', error);
      }
    };

    fetchMarketData();
    fetchMemeCoins();
  }, []);

  return (
    <div className="trending-news-container">
          <div className="section trending-news-section gainers coin-analisis">
            <h2>Top Gainers</h2>
            {gainers.map((coin) => (
              <div key={coin.id} className="coin">
                <div className="coin-header">
                  <img src={coin.image} alt={coin.name} className="coin-logo" />
                  <strong>{coin.name}</strong>&nbsp;({coin.symbol.toUpperCase()})
                </div>
                <span>Price: ${coin.current_price.toLocaleString()}</span><br />
                <span className="positive">
                  +{coin.price_change_percentage_24h?.toFixed(2)}%
                </span>
              </div>
            ))}
          </div>

          <div className="section trending-news-section losers coin-analisis">
            <h2>Top Losers</h2>
            {losers.map((coin) => (
              <div key={coin.id} className="coin">
                <div className="coin-header">
                  <img src={coin.image} alt={coin.name} className="coin-logo" />
                  <strong>{coin.name}</strong>&nbsp;({coin.symbol.toUpperCase()})
                </div>
                <span>Price: ${coin.current_price.toLocaleString()}</span><br />
                <span className="negative">
                  {coin.price_change_percentage_24h?.toFixed(2)}%
                </span>
              </div>
            ))}
          </div>

        <div className="section meme-coins coin-analisis">
          <h2>Top Meme Coins</h2>
          {memeCoins.length === 0 ? (
            <p>Loading meme coins...</p>
          ) : (
            memeCoins.map((coin) => (
              <div key={coin.id} className="coin">
                <div className="coin-header">
                  <img src={coin.image} alt={coin.name} className="coin-logo" />
                  <strong>{coin.name}</strong>&nbsp;({coin.symbol.toUpperCase()})
                </div>
                <span>
                  Price: ${coin.current_price.toLocaleString(undefined, {
                    maximumFractionDigits: 4,
                  })}
                </span><br />
                <span className={coin.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}>
                  {coin.price_change_percentage_24h?.toFixed(2)}%
                </span>
              </div>
            ))
          )}
        </div>

      <div className="section watch-list coin-analisis">
        <h1>Buzz Watchlist</h1>
        <ul>
          <li>
            <div className="coin-header">
              <img src="https://assets.coingecko.com/coins/images/29850/standard/pepe-token.jpeg?1696528776" alt="Pepe" className="coin-logo" />
              <p>Pepe</p>
            </div>
          </li>
          <li>
            <div className="coin-header">
              <img src="https://assets.coingecko.com/coins/images/35529/standard/1000050750.png?1709031995" alt="Brett" className="coin-logo" />
              <p>Brett</p>
            </div>
          </li>
          <li>
            <div className="coin-header">
              <img src="https://assets.coingecko.com/coins/images/31401/standard/centeredcoin_%281%29.png?1737048493" alt="SPX6900" className="coin-logo" />
              <p>SPX6900</p>
            </div>
          </li>
          <li>
            <div className="coin-header">
              <img src="https://assets.coingecko.com/coins/images/33929/standard/ponke.jpeg?1738897723" alt="Ponke" className="coin-logo" />
              <p>Ponke</p>
            </div>
          </li>
          <li>
            <div className="coin-header">
              <img src="https://assets.coingecko.com/coins/images/31126/standard/Toshi_Logo_-_Circular.png?1721677476" alt="Toshi" className="coin-logo" />
              <p>Toshi</p>
            </div>
          </li>
        </ul>
      </div>
      
      <div className="section event">
        <Event />
      </div>
    </div>
  );
};

export default TrendingNews;
