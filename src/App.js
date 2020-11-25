import React, { useState } from "react";
import "./styles.css";
import Song from "./Components/Song";
import Player from "./Components/Player";
import data from "./util";

export default function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <>
      <Song currentSong={currentSong} />
      <Player />
    </>
  );
}
