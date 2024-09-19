import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import TopicLinks from "./TopicLinks";
import UserLoginStatus from "./UserLoginStatus";

const Navbar = () => {
  return (
    <nav>
      <h1>NC News</h1>
      <SearchBar />
      <TopicLinks />
      <UserLoginStatus />
      <Link to="/">Home</Link>
      <Link to="/topics">Topics</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default Navbar;
