import React, { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Components
import { loadGames } from "../redux/actions/gamesAction";
import Game from "../components/Game";
// Styled
import styled from "styled-components";
import { motion } from "framer-motion";
// image
import fon_img from "./../img/main_fon.jpg";

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
      <StyledHeader className="Header">
        <img src={fon_img} alt="Header" />
      </StyledHeader>
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map((game) => (
          <Game
            key={game.id}
            id={game.id}
            name={game.name}
            released={game.released}
            img={game.background_image}
          />
        ))}
      </Games>
      <h2>Popular Games</h2>
      <Games>
        {popular.map((game) => (
          <Game
            key={game.id}
            id={game.id}
            name={game.name}
            released={game.released}
            img={game.background_image}
          />
        ))}
      </Games>
      <h2>New Games Games</h2>
      <Games>
        {newGames.map((game) => (
          <Game
            key={game.id}
            id={game.id}
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
const StyledHeader = styled(motion.div)`
  width: 99.6vw;
  height: 35vh;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    position: absolute;
    top: 17.5vh;
    transform: translateY(-50%);
  }
`;

const GameList = styled(motion.div)`
  h2 {
    padding: 5rem 0;
  }
`;

const Games = styled(motion.div)`
  padding: 0 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 3rem 5rem;
`;

export default Home;
