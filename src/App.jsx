import React, { useContext } from "react";
import "./App.css";
import GameBar from "./components/GameBar";
import BoardComponent from "./components/BoardComponent";
import Button from "./components/Button";
import { gameContext } from "./ganecontext/GameContext";
import RulesComponent from "./components/utils/RulesComponent";
import DecisionComponent from "./components/DecisionComponent";
const App = () => {
  const { showRules, showDecisionPage } = useContext(gameContext);
  return (
    <main>
      <GameBar />
      {showDecisionPage && <DecisionComponent />}
      {!showDecisionPage && <BoardComponent />}
      <Button />
      {showRules && <RulesComponent />}
    </main>
  );
};

export default App;
