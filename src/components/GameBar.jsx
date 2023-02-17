import React, { useContext, useEffect, useState } from "react";
import { delayState } from "../controller/delayState";
import { gameContext } from "../ganecontext/GameContext";
import Logo from "/images/logo-bonus.svg";
const GameBar = () => {
  const { score } = useContext(gameContext);

  return (
    <nav className="game__nav outline">
      <div className="title">
        <img src={Logo} alt="logo" className="logo" />
      </div>
      <div className="score__button">
        <p className="score__text">score</p>
        <span className="score__value">{score}</span>
      </div>
    </nav>
  );
};

export default GameBar;
