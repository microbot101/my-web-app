import React, { useState } from "react";
import "./about.css";

const About = () => {
  return (
    <>
        <div className="about">
          <div id="aboutOne" className="about_buzz mainSection">
            <h1>About Buzz</h1>
            <p>Buzz is a crypto media and charity driven markenting agency. We help project grow by creating weekly custom new's update's 
              for crypto projects, launching social impact campaign's securing bill board placement in UK, US and Japan and interviewing top crypto 
              Developers and Founders on our podcast and AMA's. <br /> We combine real world change with WEB 3 inovation.
            </p>
          </div>
          <ul id="coreP"  className="core-p mainSection">
            <h1>Core Pillars:</h1>
            <li>Crypto News Updates — weekly videos tailored for communities.</li>
            <li> Charity Campaigns — turn hype into help (Africa, local NGOs, etc).</li>
            <li> Billboard Advertising — real-world exposure in London, Tokyo & more.</li>
            <li>Buzz Podcast — interviews with top developers, founders, and thinkers.</li>
          </ul>
        <div id="podcast" className="podcast mainSection">
            <h1>The Buzz Podcast</h1>
            <p>Conversations That Move the Space.
            From meme coin founders to blockchain builders, our podcast digs into the real stories behind the projects. 
            No fluff—just strategy, community, and what’s next in Web3.</p>
            <h2>Popular Episodes:</h2>
            <p>• “The Meme Coin Revolution” — ft. PEPE community builders</p>
            <ul>
              <li>
                <a href="https://youtube.com/@buzz_3.0?si=weiW70QPsOb7DqAO">Listen Now </a>
              </li>
              <li>
                <a href="/">Be a Guest </a>
              </li>
            </ul>
          </div>
          <div id="ama"  className="ama mainSection">
            <h1>Live AMAs (Ask Me Anything)</h1>
            <p>Let Investors Ask the Real Questions.
            We host, moderate, and stream <br /> high-quality AMA sessions—so your community can meet your team, <br />hear your plans, and get excited to invest.
            </p>
            <ul>
              <li>Hosted live on X, Telegram and YouTube</li>
              <li>Recorded and repurposed into full content and YouTube short</li>
              <li>Fully branded and promoted by Buzz</li>
            </ul>
            <section>
              <a href="/">Book an AMA </a> 
              <a href="https://x.com/we_are_buzz?s=21"> Watch Past Sessions</a>
            </section>
          </div>
        </div>
    </>
  );
};

export default About;
