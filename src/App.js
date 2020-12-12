import React, { useState, useRef } from "react";
import "./styles.css";
import Song from "./Components/Song";
import Player from "./Components/Player";
import data from "./util";
import Library from "./Components/Library";

export default function App() {
  const audioRef = useRef(null);
  const [songInfo, setsongInfo] = useState({
    currentTime: 0,
    duration: 0
  });
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setsongInfo({ ...songInfo, currentTime: current, duration: duration });
  };

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);

  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <Song currentSong={currentSong} />
      <Player
        setsongInfo={setsongInfo}
        songInfo={songInfo}
        audioRef={audioRef}
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Library
        audioRef={audioRef}
        setCurrentSong={setCurrentSong}
        songs={songs}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </>
  );
}
