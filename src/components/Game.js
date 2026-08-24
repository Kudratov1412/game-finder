import React from "react";
// Styled
import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({ name, released, img }) => {
  return (
    <div>
      <h3>Game Name: {name}</h3>
      <p>Released Date: {released}</p>
      <img style={{ width: "200px" }} src={img} alt="" />
    </div>
  );
};

export default Game;
