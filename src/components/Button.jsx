import React, { useContext } from "react";
import { gameContext } from "../ganecontext/GameContext";

const Button = () => {
  const { setShowRules } = useContext(gameContext);
  return (
    <div className="rules__btn__container">
      <button
        className="text outline rule__button "
        onClick={() => setShowRules(true)}
      >
        RULES
      </button>
    </div>
  );
};

export default Button;
