
import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
// import Wedding from "../wedding/Wedding";
const Home = () => {
  return (
    <section className="section">
      <h1 className="text-3xl text-center">Welcome to Prakash</h1>
      <div className="home-section">
        <div className="grid-three-col">
          {/* First column */}
          <Link to="/wedding">
            <div className="card mx-2">
              <div className="wrapper">
                <img
                  src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg"
                  className="cover-image"
                  alt="Cover Image"
                />
              </div>
              <img
                src="https://ggayane.github.io/css-experiments/cards/force_mage-title.png"
                className="title"
                alt="Title"
              />
              <img
                src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp"
                className="character"
                alt="Character"
              />
            </div>
          </Link>
          {/* Second column */}
          <Link to="/engagement">
            <div className="card mx-2">
              <div className="wrapper">
                <img
                  src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg"
                  className="cover-image"
                  alt="Cover Image"
                />
              </div>
              <img
                src="https://ggayane.github.io/css-experiments/cards/force_mage-title.png"
                className="title"
                alt="Title"
              />
              <img
                src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp"
                className="character"
                alt="Character"
              />
            </div>
          </Link>
          {/* Third column */}
          <Link to="/birthday">
            <div className="card mx-2">
              <div className="wrapper">
                <img
                  src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg"
                  className="cover-image"
                  alt="Cover Image"
                />
              </div>
              <img
                src="https://ggayane.github.io/css-experiments/cards/force_mage-title.png"
                className="title"
                alt="Title"
              />
              <img
                src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp"
                className="character"
                alt="Character"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;