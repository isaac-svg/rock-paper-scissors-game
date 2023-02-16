import React, { useContext, useEffect, useState } from "react";
import { gameContext } from "../ganecontext/GameContext";
import makeChoice from "../controller/makeChoice";
import Disc from "./Disc";

const DecisionComponent = () => {
  const {
    gameObject,
    setAllowChange,
    showComputerChoice,
    setShowComputerChoice,
  } = useContext(gameContext);
  const [computerChoice, setComputerChoice] = useState();
  const delayComputerChoice = () => {
    setTimeout(() => setShowComputerChoice(true), 1500);
  };
  useEffect(() => {
    const d = makeChoice();
    setComputerChoice(d);
    setAllowChange(false);
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
        <span className="text choice__text">THE HOUSE PICKED</span>
      </div>
    </div>
  );
};

export default DecisionComponent;
