import React from "react";
import LibrarySong from "./LibrarySong";
const Library = ({ songs, setCurrentSong, audioRef, isPlaying }) => {
  console.log(songs);
  return (
    <div className="library">
      <div className="">
        {songs.map((song) => (
          <LibrarySong
            setCurrentSong={setCurrentSong}
            song={song}
            songs={songs}
            key={song.id}
            id={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};
export default Library;
