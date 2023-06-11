import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/food.jpg";
import '../styles/Home.css';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Diran's Restaurant</h1>
        <p>Food and Pizza for good taste</p>
        <Link to="/menu">
          <button> Order Your Food Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
