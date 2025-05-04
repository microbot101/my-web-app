import express from 'express';
import fetch from 'node-fetch'; // Use import instead of require
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const TWITTER_USER_ID = '1100659474849849345'; // Replace with your user ID

app.get('/api/twitter-total-views', async (req, res) => {
  try {
    const url = `https://api.twitter.com/2/users/${TWITTER_USER_ID}/tweets?max_results=100&tweet.fields=public_metrics`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
      },
    });

    const data = await response.json();
    const totalViews = data.data?.reduce((sum, tweet) => {
      return sum + (tweet.public_metrics?.impression_count || 0);
    }, 0) || 0;

    res.json({ totalViews });
  } catch (error) {
    console.error('Failed to fetch Twitter views:', error);
    res.status(500).json({ error: 'Failed to fetch Twitter views' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
