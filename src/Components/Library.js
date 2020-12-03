import React from "react";
import LibrarySong from "./LibrarySong";
const Library = ({ songs, setCurrentSong }) => {
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
          />
        ))}
      </div>
    </div>
  );
};
export default Library;
