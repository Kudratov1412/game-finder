import React, { useEffect } from "react";
// Redux
import { useDispatch } from "react-redux";
import { loadGames } from "../redux/actions/gamesAction";

const Home = () => {
  // useDispatch
  const dispatch = useDispatch();
  // useEffect
  useEffect(() => {
    dispatch(loadGames());
  });
  return (
    <div>
      <h2>Home page</h2>
    </div>
  );
};

export default Home;
