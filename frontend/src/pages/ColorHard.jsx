import TopBar from "../components/TopBar";
import Back from "../components/Back";
import hardbuttoncolor from "../assets/color/hardbuttoncolor.png";
import { useState,useEffect } from "react";
import backgroundMusic from "../assets/Sounds/background.mp3"; 
import useSound from 'use-sound';
import clickSfx from '../assets/Sounds/button_click.mp3'; 

import { Link } from 'react-router-dom'

function ColorHard(){
  
const [playClick] = useSound(clickSfx, { volume: 0.5 });
 useEffect(() => {
               const bgSound = new Audio(backgroundMusic);
                bgSound.loop = true;
                bgSound.volume = 0.2; // Keep it low for background
        
                // Attempt to play, handling potential autoplay restrictions
                bgSound.play().catch((err) => {
                    console.log("Autoplay blocked. User must interact to enable sound.", err);
                });
        
                // Cleanup function: pause and reset music on unmount
                return () => {
                    bgSound.pause();
                    bgSound.currentTime = 0;
                };
            }, []); 
  return(
  <>
 <div className="hidden w-full md:inline md:absolute h-auto">
  <TopBar/>
  <Back/>
  <img src="/Bg/Color/hardcolorbg.webp" 
  alt="Hard game background" 
  className="w-full"/>

   <Link to="/color/hard/level1" onClick={playClick}>
    <img src={hardbuttoncolor} 
    alt="Button for Level 1 Color"
    className="absolute left-[50%] top-[30%] w-auto cursor-pointer h-auto"/>
   </Link>
  
 </div>
    </>

  );

}

export default ColorHard