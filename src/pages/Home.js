import React, { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../redux/actions/gamesAction";
// Components
import Game from "../components/Game";
import GameDetail from "../components/gameDetail";
// Styled
import styled from "styled-components";
import { motion } from "framer-motion";
// image
import fon_img from "./../img/main_fon.jpg";

const Home = ({ cardChecked, setCardChecked }) => {
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
<<<<<<< HEAD
      <StyledHeader className="Header">
        <img src={fon_img} alt="Header" />
      </StyledHeader>
      {/* <GameDetail /> */}
=======
      {cardChecked ? <GameDetail /> : ""}
>>>>>>> 481650269ae537d85c7369b9c4d1bc72e0f55b1e
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map((game) => (
          <Game
            cardChecked={cardChecked}
            setCardChecked={setCardChecked}
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
            cardChecked={cardChecked}
            setCardChecked={setCardChecked}
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
            cardChecked={cardChecked}
            setCardChecked={setCardChecked}
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
  img {
    width: 100%;
    
    object-fit: cover;
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
