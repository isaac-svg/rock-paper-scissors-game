import React from "react";
import Disc from "./Disc";
import BoardTrack from "/images/bg-pentagon.svg";
const BoardComponent = () => {
  return (
    <div className="board__track">
      <div className="pentagon">
        <img src={BoardTrack} alt="" />
        <Disc
          name="scissors__border"
          position={"disc__1"}
          icon="/images/icon-scissors.svg"
        />
        <Disc
          name="lizard__border"
          position={"disc__2"}
          icon="/images/icon-lizard.svg"
        />
        <Disc
          name="rock__border"
          position={"disc__3"}
          icon="/images/icon-rock.svg"
        />
        <Disc
          name="paper__border"
          position={"disc__4"}
          icon="/images/icon-paper.svg"
        />
        <Disc
          name="spock__border"
          position={"disc__5"}
          icon="/images/icon-spock.svg"
        />
      </div>
    </div>
  );
};

export default BoardComponent;
