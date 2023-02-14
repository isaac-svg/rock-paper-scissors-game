import React from "react";

const GameBar = () => {
  return (
    <nav className="game__nav outline">
      <div className="title">
        <h5 className="text header__text">ROCK</h5>
        <h5 className="text header__text">PAPER</h5>
        <h5 className="text header__text">SCISSORS</h5>
        <h5 className="text header__text">LIZARD</h5>
        <h5 className="text header__text">SPOKE</h5>
      </div>
      <div className="score__button">
        <p className="score__text">score</p>
        <span className="score__value">12</span>
      </div>
    </nav>
  );
};

export default GameBar;
