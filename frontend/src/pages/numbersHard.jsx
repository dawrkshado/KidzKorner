import TopBar from "../components/TopBar";
import Back from "../components/Back";
import hardnumberbutton1 from "../assets/Number/hardnumberbutton1.png";
import useSound from 'use-sound';
import clickSfx from '../assets/Sounds/button_click_sound.mp3'; 
import {useEffect } from "react";
import backgroundMusic from "../assets/Sounds/background.mp3"; 
import { Link } from "react-router-dom";

function numbersHard(){
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
  <img src="./Bg/Number/hardnumberbg.png" 
  alt="Number medium game background" 
  className="w-full"/>

<Link to="/number/hard/level1" onClick={playClick}>
    <img src={hardnumberbutton1} 
    alt="Button for Level 1 Number"
    className="absolute left-[50%] top-[50%] w-auto cursor-pointer h-auto"/>
   </Link>

 </div>
    </>

  )
}

export default numbersHard