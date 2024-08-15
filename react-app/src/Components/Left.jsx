import React, { useContext } from 'react'
import Logo from "../assets/Images/Logo.png"
import Profile from "../assets/Images/Profile.png"
import { toggleContext } from '../App'
const Left = ({currentSong}) => {
  const useCon=useContext(toggleContext);
  return (
    <div className='Left' style={{
      background: useCon.bg ? currentSong.accent : "linear-gradient(108.18deg, #201606 2.46%, #000000 99.84%)",
      transition:"background 2s ease",
      borderRight:"1px solid black"
    }}>
      <img src={Logo} alt="" style={{
        height:"40px",
        width:"133px",
        objectFit:"cover",
        paddingTop:"20px"
      }}/>
{/*       <img src={Profile} alt="" style={{
        height:"48px",
        width:"48px",
        paddingBottom:"20px"
      }} /> */}
    </div>
  )
}

export default Left
