import React from 'react';
import './youtube.css'; // (Assuming you save the CSS separately)

const videos = [
  {
    id: 1,
    title: 'Why I Am Still Bullish On Brett',
    description: 'Brett meme coin keeps proving the doubters wrong! Watch as we break down the latest updates, key insights, and why Brett might just be the next big thing. Don’t miss out! #Brett #Crypto #MemeCoin',
    url: 'https://youtu.be/PEoWo6iOD5g?si=uyOFKdQZmt2aMcQO'
  },
  {
    id: 2,
    title: 'WHY BRETT COULD FLIP TRUMP’S MEME COIN THIS SEASON',
    description: 'Brett is on fire this season—but could it actually surpass Trump’s meme coin? We break down the trends, market sentiment, and what it would take for Brett to flip the competition. Watch now! ',
    url: 'https://youtu.be/pxqQYHa85SM'
  },
  {
    id: 3,
    title: '“Brett Meme Coin: The Underdog That Could Overtake Dogecoin!”',
    description: 'Are we on the brink of witnessing the next Dogecoin-level breakout? In today’s video, we dive deep into Brett, the meme coin that’s making waves in the crypto world. With its robust community, cultural relevance, and growing adoption, Brett could be the hidden gem that every savvy investor needs on their radar.',
    url: 'https://www.youtube.com/watch?v=K0i1zDXoUzo&t=55s'
  },
  {
    id: 4,
    title: '“Why Everyone’s Talking About Brett Meme Coin! 😲”',
    description: 'Brett Meme Coin is shaking up the crypto world! Discover why it’s getting so much hype. Is this the next big meme coin? Watch now!#BrettMemeCoin #CryptoHype #MemeCoinRevolution #CryptoNews #Altcoins',
    url: 'https://youtu.be/tXdqP6egSxI'
  },
  // Add more videos if you want
];

function YouTubeSection() {
    return (
      <div className="youtube-section-global">
        {videos.map((video) => (
          <div className="youtube-card-global" key={video.id}>
            <div className="youtube-thumbnail-global">
              <iframe 
                src={video.url} 
                frameBorder="0" 
                allowFullScreen
                title={video.title}
              ></iframe>
            </div>
            <div className="youtube-content-global">
              <h2>{video.title}</h2>
              <p>{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default YouTubeSection;