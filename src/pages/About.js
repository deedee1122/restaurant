import React from "react";
import MultipleFoods from "../assets/multipleFoods.jpg";
import '../styles/About.css';


export default function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultipleFoods})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Pizza is a dish of Italian origin consisting of a usually round, flat
          base of leavened wheat-based dough topped with tomatoes, cheese, and
          often various other ingredients, which is then baked at a high
          temperature, traditionally in a wood-fired oven. A small pizza is
          sometimes called a pizzetta
        </p>
      </div>
    </div>
  );
}
