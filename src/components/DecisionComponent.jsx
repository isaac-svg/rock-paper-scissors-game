import React, { useContext, useEffect, useState } from "react";
import { gameContext } from "../ganecontext/GameContext";
import makeChoice from "../controller/makeChoice";
import Disc from "./Disc";
import chooseWinner from "../controller/chooseWinner";

const DecisionComponent = () => {
  const {
    gameObject,
    setGameObject,
    setAllowChange,
    showComputerChoice,
    setShowComputerChoice,
    setComputerChoiceGameObject,
    setScore,
    score,
    setDeclareWinner,
    declareWinner,
    setShowDecisionPage,
    userWin,
    setPlayersDraw,
    playersDraw,
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
      setDeclareWinner,
      setPlayersDraw
    );
    delayComputerChoice();
  }, []);

  delayComputerChoice();
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
      {declareWinner && (
        <div className="winner__container">
          <h2 className="winner__text">{`${
            playersDraw ? "YOU DRAW" : userWin ? "YOU WIN" : "YOU LOSE"
          }`}</h2>
          <button
            className="play__again"
            onClick={() => {
              setShowDecisionPage(false);
              // updateChoice({ name: "", icon: "" });
              setAllowChange(true);
              setGameObject({ name: "", icon: "" });
            }}
          >
            PLAY AGAIN
          </button>
        </div>
      )}
      <div className="choice">
        <div className="computer__card">
          {showComputerChoice && (
            <Disc
              name={computerChoice?.name}
              icon={computerChoice?.icon}
              position="choice__disc"
            />
          )}
          <span className="text choice__text">THE HOUSE PICKED</span>
        </div>
      </div>
    </div>
  );
};

export default DecisionComponent;
