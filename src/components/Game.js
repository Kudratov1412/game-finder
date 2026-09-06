import React, { useState } from "react";
// Styled
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
// Import Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "./../redux/actions/detailAction";
import GameDetail from "../components/gameDetail";

const Game = ({ name, released, img, id }) => {
  // Load Details
  const dispatch = useDispatch();
  const loadDispatchHandler = () => {
    dispatch(loadDetail(id));
    setCardChecked(true);
  };
  const [cardChecked, setCardChecked] = useState(false);

  const exit = () => {
    setCardChecked(false);
    console.log("aaaaa");
  };

  return (
    <StyledGame onClick={loadDispatchHandler}>
      <div className="card">
        <h3>Game Name: {name}</h3>
        <p>Released Date: {released}</p>
        <img src={img} alt="" />
      </div>
      <AnimatePresence>
        {cardChecked && <GameDetail exit={exit} />}
      </AnimatePresence>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  img {
    width: 100%;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    height: 35vh;
    object-fit: cover;
  }
`;

export default Game;
