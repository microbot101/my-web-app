import React, { useState, useEffect } from 'react';
import styles from './Event.module.css'; // fixed import to styles

const cards = [
  {
    image: 'https://images.unsplash.com/photo-1568526381923-caf3fd520382?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'First Event',
    description: 'This is the description for the first event.',
  },
  {
    image: 'https://images.unsplash.com/photo-1614350391736-ed8619d63c06?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Second Event',
    description: 'This is the description for the second event.',
  },
  {
    image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Third Event',
    description: 'This is the description for the third event.',
  },
];

function Event() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const { image, title, description } = cards[currentIndex];

  return (
    <div className={styles.eventCard}>
      <div className={`${styles.eventCardContentWrapper} ${fade ? styles.eventFadeIn : styles.eventFadeOut}`}>
        <img src={image} alt={title} className={styles.eventCardImage} />
        <div className={styles.eventCardContent}>
          <h2 className={styles.eventCardTitle}>{title}</h2>
          <p className={styles.eventCardDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Event;
