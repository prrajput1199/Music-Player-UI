import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { toggleContext } from "../App";
import { ArrowLeft } from "phosphor-react";

const Player = ({ currentSong }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const useCon = useContext(toggleContext);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
    if (window.innerWidth >= 768) {
      useCon.settoggle(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        className="player"
        style={{
          width: isMobile ? (useCon.toggle ? "100vw" : "60vw") : "60vw",
          height: "100vh",
          display: isMobile ? (useCon.toggle ? "block" : "none") : "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          background: useCon.bg
            ? currentSong.accent
            : "linear-gradient(108.18deg, #201606 2.46%, #000000 99.84%)",
          transition: "background 2s ease",
        }}
      >
        <div
          className="player-content"
          style={{
            width: "100%",
            height: "72%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            onClick={() => useCon.settoggle(false)}
            style={{
              opacity: "50%",
              color: "white",
              marginRight: "auto",
              display: isMobile ? "flex" : "none",
              alignItems: "center",
              gap: "10px",
              paddingLeft: "30px",
              paddingTop: "30px",
            }}
          >
            <ArrowLeft size={32} />
            <p>Back</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <div>
              <h2
                style={{
                  color: "white",
                }}
              >
                {currentSong.name}
              </h2>
              <h3
                style={{
                  color: "white",
                  opacity: "60%",
                  fontSize: "16px",
                }}
              >
                {currentSong.artist}
              </h3>
            </div>
          </div>

          <div>
            <img
              src={`https://cms.samespace.com/assets/${currentSong.cover}`}
              alt="cover"
              style={{
                width: "300px",
                objectFit: "cover",
                height: "300px",
              }}
            />
          </div>
          <audio controls src={currentSong.url}></audio>
        </div>
      </div>
    </>
  );
};

export default Player;
