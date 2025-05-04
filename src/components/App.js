// src/App.js
import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "../styles/global.css";
import "../styles/theme.css";
import NavBar from "./NavBar/NavBar.jsx";
import Banner from "./banner/banner.jsx";
import About from "./about/about.jsx";
import FollowersCounter from "./FollowersCounter/FollowersCounter.jsx";
import Case from "./case/case.jsx";
import Card from "./case/service.jsx";
import News from "./news/news.jsx";
import Price from "./news/price/price.jsx";
import NewsPage from "./news/newspage/newspage.jsx";
import ArrMain from "./Accordion/ArrMain.js";
import Gallery from "./gallery/gallery.jsx";
import LoadingScreen from "./LoadingScreen/LoadingScreen.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <FollowersCounter />
              <About />
              <Case />
              <Card />
              <ArrMain />
              <Gallery />
            </>
          }
        />
        <Route
          path="/news"
          element={
            <>
              <Price />
              <News />
            </>
          }
        />
        <Route path="/news/more" element={<NewsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
