import React, { useContext } from "react";
import { gameContext } from "../ganecontext/GameContext";
import Disc from "./Disc";

const DecisionComponent = () => {
  const { gameObject } = useContext(gameContext);
  console.log(gameObject);
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
        <Disc
          name={gameObject.name}
          icon={gameObject.icon}
          position="choice__disc"
        />
        <span className="text choice__text">THE HOUSE PICKED</span>
      </div>
    </div>
  );
};

export default DecisionComponent;
