// src/components/LoadingScreen.jsx
import React from 'react';
import './LoadingScreen.css'


const LoadingScreen = () => {
    return (
      <div className="loadingScreen">
        <img
          src="/loading.gif" // Put your GIF in the public folder
          alt="Loading..."
        />
      </div>
    );
  };
  
  export default LoadingScreen;
  