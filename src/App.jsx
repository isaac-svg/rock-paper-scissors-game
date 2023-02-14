import React, { useContext } from "react";
import "./App.css";
import GameBar from "./components/GameBar";
import BoardComponent from "./components/BoardComponent";
import Button from "./components/Button";
import { gameContext } from "./ganecontext/GameContext";
const App = () => {
  const { showRules } = useContext(gameContext);
  return (
    <main>
      <GameBar />
      <BoardComponent />
      <Button />
      {showRules && <div>Hello world</div>}
    </main>
  );
};

export default App;
