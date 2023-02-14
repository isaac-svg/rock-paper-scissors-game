import React from "react";
import "./App.css";
import GameBar from "./components/GameBar";
import BoardComponent from "./components/BoardComponent";
import Button from "./components/Button";
const App = () => {
  return (
    <main>
      <GameBar />
      <BoardComponent />
      <Button />
    </main>
  );
};

export default App;
