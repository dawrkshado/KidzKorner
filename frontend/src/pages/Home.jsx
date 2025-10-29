import TopBar from "../components/TopBar.jsx";
import OrangeMonster from "../assets/Home/shapemonster.webp";
import BlueMonster from "../assets/Home/blueMonster.webp";
import bluemonster from "../assets/Home/numberMonster.webp";
import TvMonster from "../assets/Home/TvMonster.webp";
import redmonster from "../assets/Home/redmonster.webp"
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import api from "../api";
import Back from "../components/Back.jsx";
import useSound from 'use-sound';
import clickSfx from '../assets/Sounds/button_click.mp3';
import backgroundMusic from "../assets/Sounds/background.mp3"; 


function Home(){
   const [playClick] = useSound(clickSfx, { volume: 0.5 });


  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await api.get("/api/user-profile/");
        console.log(res.data)
      } catch (err) {
        console.error("Not logged in:", err);
      }
    };

    checkUser();
  }, []);

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

    
    <div className="hidden w-[100vw] md:inline md:absolute h-[100%] overflow-hidden">
      <Link to="/parentskorner"><div className="bg-black flex  h-30 w-30 justify-center items-center text-white absolute">To Parent</div></Link>
        <img src="./Bg/kidzBackground.webp" alt="background" className="w-full"/>
          
        <Link to="/color"onClick={playClick}><img src={redmonster} alt="Monster Button for color page" className="absolute right-[22%] bottom-[10%] h-[35%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000 "/></Link>

        <Link to="/stories"onClick={playClick}><img src={TvMonster} alt="Monster Button for stories page" className="absolute left-[15%] bottom-[42%] h-[25%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000" /></Link>

        <Link to="/number"onClick={playClick}><img src={bluemonster} alt="Monster Button for numbers page" className="absolute right-[10%] bottom-[0%] h-[35%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000 "/></Link>
        
        <Link to="/alphabets" onClick={playClick}><img src={BlueMonster} alt="Monster Button for alphabet page" className="absolute left-[5%] bottom-[0%] h-[41%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000"/></Link>

        <Link to="/shapes" onClick={playClick}><img id="shapemonster" src={OrangeMonster} alt="Monster Button for shapes page" className="absolute left-[30%]   bottom-[0%] h-[35%] motion-preset-pulse-sm motion-duration-2000 hover:opacity-85"/></Link>
    </div>
    </>
);
}
export default Home