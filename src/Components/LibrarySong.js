import React from "react";
const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  id,
  audioRef,
  isPlaying
}) => {
  const selectSongHandler = async () => {
    await setCurrentSong(song);

    const selectedSong = songs.filter((state) => state.id === id);
    console.log(selectedSong);
    setCurrentSong(selectedSong[0]);
    audioRef.current.play();
  };
  return (
    <>
      <div onClick={selectSongHandler} className="library-song">
        <img src={song.cover}></img>
        <div className="song-description">
          <h3>{song.name}</h3>
          <h4>{song.artist}</h4>
        </div>
      </div>
    </>
  );
};
export default LibrarySong;
