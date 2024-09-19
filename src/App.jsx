import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingleArticlePage from "./pages/SingleArticlePage";
import TopicsPage from "./pages/TopicsPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles/:articleId" element={<SingleArticlePage />} />
        <Route path="/topics" element={<TopicsPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
