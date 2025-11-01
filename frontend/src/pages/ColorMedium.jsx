import TopBar from "../components/TopBar";
import Back from "../components/Back";
import avebutton1 from "../assets/color/avebutton1.png";
import avebutton2 from "../assets/color/avebutton2.png";
import { Link } from 'react-router-dom'
import { useState,useEffect } from "react";
import backgroundMusic from "../assets/Sounds/background.mp3"; 
import useSound from 'use-sound';
import clickSfx from '../assets/Sounds/button_click.mp3'; 

function ColorMedium(){
  const [playClick] = useSound(clickSfx, { volume: 0.5 });
useEffect(() => {
               const bgSound = new Audio(backgroundMusic);
                bgSound.loop = true;
                bgSound.volume = 0.2; 
        
                bgSound.play().catch((err) => {
                    console.log("Autoplay blocked. User must interact to enable sound.", err);
                });
        
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
  <img src="/Bg/Color/averagecolorbg.webp" 
  alt="Medium game background" 
  className="w-full"/>

   <Link to="/color/medium/level1"  onClick={playClick}>
  <img src={avebutton1} 
  alt="Button for Level 1 Color"
  className="absolute left-[40%] top-[30%] w-auto cursor-pointer h-auto"/>
 </Link>

 <Link to="/color/medium/level2" onClick={playClick}>
  <img src={avebutton2} 
  alt="Button for Level 2 Color"
  className="absolute left-[60%] top-[50%] w-auto cursor-pointer h-auto"/>
 </Link>

   </div>
    </>

  );

}

export default ColorMedium