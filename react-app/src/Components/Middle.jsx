import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { fetchSongs } from "../api";
import Tab from "./Tab";
import SongList from "../Components/SongList";
import { useContext } from "react";
import { toggleContext } from "../App";
const Middle = ({ currentSong, setCurrentSong ,songs,setSongs}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [istoptrack, setistoptrack] = useState(false);
  const useCon = useContext(toggleContext);


  const filteredSongs = songs.filter((song) =>
    song.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const TopTrackSongs = songs.filter((song) => song.top_track === true);

  return (
    <div
      className="middle"
      style={{
        display: useCon.toggle ? "none" : "flex",
        flexDirection:"column",
        background: useCon.bg ? currentSong.accent : "linear-gradient(108.18deg, #201606 2.46%, #000000 99.84%)",
        transition:"background 2s ease",
        width:"400px",
        height:"100vh",
        borderRight:"1px solid black"
      }}
    >
      <div className="tab-search" style={{
       
        display:"flex",
        flexDirection:"column",
        // flexShrink:0,
        zIndex:1000,
        background: useCon.bg ? currentSong.accent : "linear-gradient(108.18deg, #201606 2.46%, #000000 99.84%)",
      }}>
        <Tab istoptrack={istoptrack} setistoptrack={setistoptrack} />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      <div className="songList" style={{
        flexGrow:1,
        overflowY:"scroll",
        padding:"20px",
        height:"100vh"
      }}>
        <SongList
          setCurrentSong={setCurrentSong}
          songs={filteredSongs}
          istoptrack={istoptrack}
          TopSongs={TopTrackSongs}
        />
      </div>
    </div>
  );
};

export default Middle;
