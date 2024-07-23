import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { toggleContext } from "../App";

const SongList = ({ setCurrentSong, songs, istoptrack, TopSongs }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [backgroundColor,setbackgroundcolor]=useState(false);
  const useCon = useContext(toggleContext);
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };
  const HandleClick = (song) => {
    setCurrentSong(song);
    useCon.setbg(true);
    setbackgroundcolor(!backgroundColor);
    if (isMobile) {
      useCon.settoggle(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="song-list">
      {istoptrack
        ? TopSongs.map((song) => (
            <div key={song.id} onClick={() => HandleClick(song)} className="song-list-div">
              <img
                src={`https://cms.samespace.com/assets/${song.cover}`}
                alt="cover"
                style={{
                  borderRadius: "100%",
                }}
              />
              <div className="song-content">
                <span
                  style={{
                    color: "rgba(255, 255, 255, 1)",
                  }}
                >
                  {song.name}
                </span>
                <span
                  style={{
                    color: "rgba(255, 255, 255, 1)",
                    opacity: "60%",
                  }}
                >
                  {song.artist}
                </span>
              </div>
            </div>
          ))
        : songs.map((song) => (
            <div key={song.id} onClick={() => HandleClick(song)} className="song-list-div">
              <img
                src={`https://cms.samespace.com/assets/${song.cover}`}
                alt="cover"
                style={{
                  borderRadius: "100%",
                }}
              />
              <div className="song-content">
                <span
                  style={{
                    color: "rgba(255, 255, 255, 1)",
                  }}
                >
                  {song.name}
                </span>
                <span
                  style={{
                    color: "rgba(255, 255, 255, 1)",
                    opacity: "60%",
                  }}
                >
                  {song.artist}
                </span>
              </div>
            </div>
          ))}
    </div>
  );
};

export default SongList;
