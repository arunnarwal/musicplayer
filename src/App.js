import React, { useState } from "react";
import "./styles.css";
import Song from "./Components/Song";
import Player from "./Components/Player";
import data from "./util";
import Library from "./Components/Library";

export default function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);

  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Library setCurrentSong={setCurrentSong} songs={songs} />
    </>
  );
}
