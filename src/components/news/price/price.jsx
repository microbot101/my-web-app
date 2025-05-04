// CryptoTicker.js
import React, { useEffect, useState } from 'react';
import './price.css';

const ids = [
  'staked-ether', 'tron', 'avalanche-2', 'sui', 'toncoin', 'bitcoin', 'ethereum', 'ripple'
];

const Price = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids.join(',')}`);
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPrices();

    const interval = setInterval(fetchPrices, 60000); // Update every 60s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ticker-container">
      <div className="ticker-track">
        {data.map((coin) => (
          <div className="ticker-item" key={coin.id}>
            <strong>{coin.symbol.toUpperCase()}</strong>&nbsp;
            <span>${coin.current_price.toLocaleString()}</span>&nbsp;
            <span className={coin.price_change_percentage_24h < 0 ? 'red' : 'green'}>
              {coin.price_change_percentage_24h < 0 ? '▼' : '▲'} {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
