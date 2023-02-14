import React, { useContext } from "react";
import { gameContext } from "../ganecontext/GameContext";
import Disc from "./Disc";

const DecisionComponent = () => {
  const { gameObject } = useContext(gameContext);
  console.log(gameObject);
  return (
    <div>
      <Disc name={gameObject.name} icon={gameObject.icon} />
    </div>
  );
};

export default DecisionComponent;
