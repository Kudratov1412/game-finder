import React, { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../redux/actions/gamesAction";
// Components
import Game from "../components/Game";
// Styled
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  // useDispatch
  const dispatch = useDispatch();
  // useEffect
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  // Data ga kirish
  const { popular, newGames, upcoming } = useSelector((state) => state.games);

  return (
    <GameList className="list">
      <h2>Home page</h2>
      <Games>
        {upcoming.map((game) => (
          <Game
            key={game.id}
            name={game.name}
            released={game.released}
            img={game.background_image}
          />
        ))}
      </Games>
    </GameList>
  );
};

// Styled-Components
const GameList = styled(motion.div)``;

const Games = styled(motion.div)``;

export default Home;
