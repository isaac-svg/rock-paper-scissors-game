import React, { useContext } from "react";
import { gameContext } from "../ganecontext/GameContext";

const Button = () => {
  const { setShowRules } = useContext(gameContext);
  return (
    <div className="rules">
      <button
        className="text outline rule__button cursor"
        onClick={() => setShowRules(true)}
      >
        RULES
      </button>
    </div>
  );
};

export default Button;
