import React from 'react';
import ReactDOM from 'react-dom/client'; // Change this import
import App from "./components/App.js";
import './styles/global.css';
import './styles/theme.css';

// Create a root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component
root.render(<App />);   