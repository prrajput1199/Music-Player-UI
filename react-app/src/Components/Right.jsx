import React from "react";
import Player from "./Player";

const Right = ({ currentSong }) => {
  return <>{currentSong && <Player currentSong={currentSong} />}</>;
};

export default Right;
