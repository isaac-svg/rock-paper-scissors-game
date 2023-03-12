import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import GameBar from "./components/GameBar";
import BoardComponent from "./components/BoardComponent";
import Button from "./components/Button";
import { gameContext } from "./ganecontext/GameContext";
import RulesComponent from "./components/utils/RulesComponent";
import DecisionComponent from "./components/DecisionComponent";
const App = () => {
  const { showRules, showDecisionPage } = useContext(gameContext);
  const [resize, setResize] = useState(0);
<<<<<<< HEAD
  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setResize(window.innerWidth);
    });
    return window.removeEventListener("resize", (e) => {
      setResize(window.innerWidth);
    });
  }, [resize]);
  console.log(resize);
=======
  // useEffect(() => {
  //   window.addEventListener("resize", (e) => {
  //     setResize(window.innerWidth);
  //   });
  //   return window.removeEventListener("resize", (e) => {
  //     setResize(window.innerWidth);
  //   });
  // }, [resize]);
  // console.log(resize);
>>>>>>> 9ea6bee (refactored choseWinner)
  return (
    <main>
      <GameBar />
      {showDecisionPage && <DecisionComponent />}
      {!showDecisionPage && <BoardComponent />}
      {showRules && <RulesComponent />}
      <Button />
    </main>
  );
};

export default App;
