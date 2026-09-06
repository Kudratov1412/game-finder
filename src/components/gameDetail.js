import React from "react";
// Styles
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useSelector } from "react-redux";

const GameDetail = ({ exit }) => {
  // Data
  const { game, screen } = useSelector((state) => state.detail);

  const starColor = (num) => {
    if (game.rating < num) {
      return "#777";
    } else {
      return "#be5c00";
    }
  };

  return (
    <CardShadow
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div onClick={exit} className="exit"></div>
      <div className="card-shadow">
        <CardDetail
          className="detail"
          initial={{ opacity: 0, scale: 0.5, y: "100px", x: "400px" }}
          animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: "100px", x: "400px" }}
          transition={{ duration: 0.3 }}
        >
          <button onClick={exit} type="button">
            <i className="fa-solid fa-x"></i>
          </button>
          <h3 className="game-name">{game.name}</h3>
          <div className="status">
            <div className="rating">
              <p>Rating: {game.rating}</p>
              <div className="stars">
                <i
                  style={{ color: starColor(1) }}
                  className="fa-solid fa-star"
                ></i>
                <i
                  style={{ color: starColor(2) }}
                  className="fa-solid fa-star"
                ></i>
                <i
                  style={{ color: starColor(3) }}
                  className="fa-solid fa-star"
                ></i>
                <i
                  style={{ color: starColor(4) }}
                  className="fa-solid fa-star"
                ></i>
                <i
                  style={{ color: starColor(5) }}
                  className="fa-solid fa-star"
                ></i>
              </div>
            </div>
            <div className="info">
              <h3>Platforms</h3>
              <div className="platforms">
                {Object.keys(game).length !== 0
                  ? game.platforms.map((data) => {
                      if (data.platform.slug.includes("pc")) {
                        return <i className="fa-brands fa-steam"></i>;
                      } else if (data.platform.slug.includes("xbox")) {
                        return <i className="fa-brands fa-xbox"></i>;
                      } else if (data.platform.slug.includes("playstation")) {
                        return <i className="fa-brands fa-playstation"></i>;
                      } else {
                        return <i className="fa-solid fa-gamepad"></i>;
                      }
                    })
                  : ""}
              </div>
            </div>
          </div>
          <div className="media">
            <img src={game.background_image} alt="game.background_image" />
          </div>
          <p className="description">{game.description_raw}</p>
          <div className="gallery">
            {Object.keys(screen).length !== 0
              ? screen.results.map((s) => (
                  <img key={s.id} src={s.image} alt="screen_img" />
                ))
              : ""}
          </div>
        </CardDetail>
      </div>
    </CardShadow>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  .exit {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1;
  }
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: blueviolet;
  }
`;

const CardDetail = styled(motion.div)`
  width: 90%;
  border-radius: 1rem;
  padding: 3rem 5rem;
  position: absolute;
  background: #fff;
  left: 5%;
  z-index: 10;
  color: #000;
  button {
    position: absolute;
    right: 2rem;
    top: 1.8rem;
    outline: none;
    border: none;
    background: none;
    font-size: large;
    color: #aaa;
    transition: all 0.1s linear;
  }
  button:hover {
    color: #777;
    transform: scale(1.2);
  }
  .game-name {
    margin-bottom: 1.5rem;
  }
  .status {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
  }
  .rating p {
    line-height: 100%;
    margin-bottom: 1rem;
  }
  .stars i {
    color: #777;
  }
  .info {
    text-align: right;
  }
  .info h3 {
    margin-bottom: 1rem;
  }
  .platforms i {
    margin: 0 3px;
    color: #777;
  }
  .gallery img {
    margin: -2px 0;
  }
  .description {
    margin: 3rem 0;
    text-align: left;
  }
  h3 {
    padding: 0;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;

export default GameDetail;
