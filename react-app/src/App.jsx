import React, { useState, useEffect, createContext } from "react";
import "./index.css";
import Left from "./Components/Left";
import Middle from "./Components/Middle";
import Right from "./Components/Right";
import { fetchSongs } from "./api";

const toggleContext = createContext();

export default function App() {
  const [currentSong, setCurrentSong] = useState();
  const [toggle, settoggle] = useState(false);
  const [bg, setbg] = useState(false);
  const [songs, setSongs] = useState([]);

  const getSongs = async () => {
    const songs = await fetchSongs();
    setSongs(songs);
    console.log(songs);
    setCurrentSong(songs[0]);
  };

  useEffect(() => {
    getSongs();
  }, []);

  return (
    <div className="app">
      <toggleContext.Provider value={{ toggle, settoggle, bg, setbg }}>
        <Left currentSong={currentSong} />

        <Middle
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          songs={songs}
          setSongs={setSongs}
        />

        <Right currentSong={currentSong} />
      </toggleContext.Provider>
    </div>
  );
}

export { toggleContext };
