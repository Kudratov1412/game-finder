import React from "react";
// Styles
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useSelector } from "react-redux";

const GameDetail = () => {
  // Data
  const { game, screen } = useSelector((state) => state.detail);
  return (
    <div>
      <div className="card-shadow">
        <div className="detail">
          <div className="status">
            <div className="rating">
              <h3>{game.name}</h3>
              <p>Rating: {game.rating}</p>
            </div>
            <div className="info">
              <h3>Platforms</h3>
              <div className="platforms">
                {game.parent_platforms.map((data) => (
                  <h2 key={data.platform.id}>{data.platform.name}</h2>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="media">
          <img src={game.background_image} alt="game.background_image" />
        </div>
        <div className="gallery">
          {screen.result.map((screen) => (
            <img key={screen.id} src={screen.img} alt="screen_img" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
