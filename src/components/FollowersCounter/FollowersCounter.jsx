import React, { useState, useEffect } from "react";
import "./FlipClock.css";

const FlipClock = ({ number }) => {
  
  const digits = String(number).padStart(7, "0").split("");
  return (
    <div className="flip-clock">
      {digits.map((digit, index) => (
        <div key={index} className="flip-digit">
          <div className="top">{digit}</div>
          <div className="bottom">{digit}</div>
        </div>
      ))}
    </div>
  );
};

const FollowersCounter = () => {
  const [totalViews, setTotalViews] = useState(0);
  const [displayCount, setDisplayCount] = useState(0);

  const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const YOUTUBE_CHANNEL_ID = process.env.REACT_APP_YOUTUBE_CHANNEL_ID;

  const STATIC_TWITTER_VIEWS = 737748480;

  useEffect(() => {
    const fetchYouTubeViews = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${YOUTUBE_CHANNEL_ID}&key=${YOUTUBE_API_KEY}`
        );
        const data = await response.json();

        if (data.items && data.items.length > 0) {
          const youtubeViews = parseInt(data.items[0].statistics.viewCount, 10);
          fetchTwitterViews(youtubeViews);
        } else {
          console.error("YouTube data not found:", data);
          fetchTwitterViews(STATIC_TWITTER_VIEWS);
        }
      } catch (error) {
        console.error("Failed to fetch YouTube data:", error);
        fetchTwitterViews(STATIC_TWITTER_VIEWS);
      }
    };

    const fetchTwitterViews = async (youtubeViews) => {
      try {
        // Fetch the total views from your backend
        // in FollowersCounter.jsx:
       const response = await fetch('http://localhost:5000/api/twitter-total-views');
        const data = await response.json();
        const twitterViews = data.totalViews || 0;

        const total = youtubeViews + STATIC_TWITTER_VIEWS;
        setTotalViews(total);
      } catch (error) {
        console.error("Failed to fetch Twitter data:", error);
        setTotalViews(youtubeViews); // Fallback
      }
    };

    fetchYouTubeViews();
  }, []);

  useEffect(() => {
    if (totalViews > 0) {
      let current = 0;
      const increment = Math.ceil(totalViews / 100);
      const interval = setInterval(() => {
        current += increment;
        if (current >= totalViews) {
          current = totalViews;
          clearInterval(interval);
        }
        setDisplayCount(current);
      }, 20);
      return () => clearInterval(interval);
    }
  }, [totalViews]);

  return (
    <div className="followers-counter mainSection" id="followersCount">
      <h1>Total views on all platforms</h1>
      <FlipClock number={displayCount} />
      <ul>
        <li><a href="https://www.instagram.com/weare_buzz?igsh=MTFmaGltcmp0dXQ5eQ%3D%3D&utm_source=qr" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a></li>
        <li><a href="https://x.com/we_are_buzz?s=21" target="_blank"><ion-icon name="logo-twitter"></ion-icon></a></li>
        <li><a href="https://www.youtube.com/@Buzz_3.0" target="_blank"><ion-icon name="logo-youtube"></ion-icon></a></li>
        <li><a href="https://t.me/we_are_buzz2" target="_blank"><ion-icon name="paper-plane"></ion-icon></a></li>
        <li><a href="#" target="_blank"><ion-icon name="logo-tiktok"></ion-icon></a></li>
      </ul>
    </div>
  );
};

export default FollowersCounter;
