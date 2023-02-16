import React, { useContext, useEffect, useState } from "react";
import { gameContext } from "../ganecontext/GameContext";
import makeChoice from "../controller/makeChoice";
import Disc from "./Disc";
import chooseWinner from "../controller/chooseWinner";

const DecisionComponent = () => {
  const {
    gameObject,
    setAllowChange,
    showComputerChoice,
    setShowComputerChoice,
    setComputerChoiceGameObject,
    setScore,
    score,
    setDeclareWinner,
    declareWinner,
  } = useContext(gameContext);
  const [computerChoice, setComputerChoice] = useState({});
  const delayComputerChoice = () => {
    setTimeout(() => setShowComputerChoice(true), 1500);
  };
  useEffect(() => {
    const computerDec = makeChoice();
    setComputerChoice(computerDec);
    setAllowChange(false);
    setComputerChoiceGameObject(computerChoice);
    chooseWinner(
      gameObject.name,
      computerDec.name,
      setScore,
      score,
      setDeclareWinner
    );
    delayComputerChoice();
    console.log(computerChoice, "computerChoice");
  }, []);

  return (
    <div className="decision__component">
      <div className="choice">
        <Disc
          name={gameObject.name}
          icon={gameObject.icon}
          position="choice__disc"
        />
        <span className="text choice__text">YOU PICKED</span>
      </div>
      <div className="choice">
        <div className="computer__card">
          {showComputerChoice && (
            <Disc
              name={computerChoice?.name}
              icon={computerChoice?.icon}
              position="choice__disc"
            />
          )}
        </div>
        {declareWinner ? <h1>Hello world</h1> : "what are you tring todo"}

        <span className="text choice__text">THE HOUSE PICKED</span>
      </div>
    </div>
  );
};

export default DecisionComponent;
