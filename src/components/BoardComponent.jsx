import React from "react";
import Disc from "./Disc";
import BoardTrack from "/images/bg-pentagon.svg";
const BoardComponent = () => {
  return (
    <div className="board__track">
      <div className="pentagon">
        <img src={BoardTrack} alt="" />
        <Disc
          name="scissors"
          position={"disc__1"}
          icon="/public/images/icon-scissors.svg"
        />
        <Disc
          name="lizard"
          position={"disc__2"}
          icon="/public/images/icon-lizard.svg"
        />
        <Disc
          name="rock"
          position={"disc__3"}
          icon="/public/images/icon-rock.svg"
        />
        <Disc
          name="paper"
          position={"disc__4"}
          icon="/public/images/icon-paper.svg"
        />
        <Disc
          name="spock"
          position={"disc__5"}
          icon="/public/images/icon-spock.svg"
        />
      </div>
    </div>
  );
};

export default BoardComponent;
