import TopBar from "../components/TopBar";
import Back from "../components/Back";
import easycolorl1 from "../assets/color/easycolorl1.png";
import easycolorl2 from "../assets/color/easycolorl2.png";
import easycolorl3 from "../assets/color/easycolorl3.png";
import { Link } from 'react-router-dom'
import { useState,useEffect } from "react";
import backgroundMusic from "../assets/Sounds/background.mp3"; 
import useSound from 'use-sound';
import clickSfx from '../assets/Sounds/button_click_sound.mp3'; 

function ColorEasy(){
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
  return(<>
 <div className="hidden w-full md:inline md:absolute h-auto">
  <TopBar/>
  <Back/>
  <img src="/Bg/Color/easycolor.webp" 
  alt="Easy game background" 
  className="w-full"/>

  <Link to= "/color/easy/level1"onClick={playClick}>
  <img src={easycolorl1} 
  alt="Button for Level 1 Color"
  className="absolute left-[30%] top-[30%] w-auto cursor-pointer h-auto"/>
  </Link>

  <Link to="/color/easy/level2" onClick={playClick}>
  <img src={easycolorl2} 
  alt="Button for Level 2 Color"
  className="absolute left-[50%] top-[50%] w-auto cursor-pointer h-auto"/>
 </Link>

 <Link to="/color/easy/level3" onClick={playClick}>
  <img src={easycolorl3} 
  alt="Button for Level 3 Color"
  className="absolute left-[70%] top-[30%] w-auto cursor-pointer h-auto"/>
 </Link>

   </div>
    </>

  );

}
export default ColorEasy