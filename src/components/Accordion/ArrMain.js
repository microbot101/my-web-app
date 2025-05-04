// src/components/Accordion/ArrMain.jsx
import React from 'react';
import Accordion from './Accordion.jsx';
import './Accordion.css';

const data = [
  {
    title: 'What exactly is Buzz?',
    content:
      'Buzz is your all-in-one crypto media powerhouse. We help tokens stand out, get noticed, and build real trust—through storytelling, charity, billboards, and weekly news-style updates that make your project look legit, active, and impactful. No fluff, no fake hype—just real visibility and real community wins.',
  },
  {
    title: 'Why should I work with Buzz instead of other crypto marketers?',
    content:
      'Because we don’t just post tweets and call it “marketing.” We build movements. We create stories that investors want to be part of. We partner your token with real-world impact—clean water projects, education drives, community relief—and turn those into viral content your community can be proud of. It’s not just exposure—it’s reputation.',
  },
  {
    title: 'What does a full Buzz campaign include?',
    content:
      'A full campaign could include:\n• Weekly video updates about your token and the market\n• A custom charity campaign that puts your coin in the spotlight\n• Billboards in London, Tokyo, and beyond\n• Podcast and AMA interviews to tell your story\n• Killer content for Twitter, Telegram, and Discord\n\nYou don’t just get a service—you get a full media engine behind your project.',
  },
  {
    title: 'How do your weekly news updates work?',
    content:
      'Think: high-quality video updates that mix crypto news, your project’s latest wins, and your community highlights—published weekly across platforms. Investors love seeing activity. These updates make your project look alive, consistent, and serious.',
  },
  {
    title: 'How do we start working with Buzz?',
    content:
      'Just hit the “Get Started” button on our site or message us directly on Telegram. We’ll review your project, hop on a call, and build a plan that makes your token impossible to ignore.',
  },
];

function ArrMain() {
  return (
    <div className="faq">
      <h2>Buzz FAQ — Everything You Need to Know</h2>
      <Accordion items={data} />
    </div>
  );
}

export default ArrMain;
