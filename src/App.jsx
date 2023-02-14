import React, { useContext } from "react";
import "./App.css";
import GameBar from "./components/GameBar";
import BoardComponent from "./components/BoardComponent";
import Button from "./components/Button";
import { gameContext } from "./ganecontext/GameContext";
import RulesComponent from "./components/utils/RulesComponent";
const App = () => {
  const { showRules } = useContext(gameContext);
  return (
    <main>
      <GameBar />
      <BoardComponent />
      <Button />
      {showRules && <RulesComponent />}
    </main>
  );
};

export default App;
