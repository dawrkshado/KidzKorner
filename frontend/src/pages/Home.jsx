import TopBar from "../components/TopBar.jsx";
import OrangeMonster from "../assets/Home/orangeMonster.webp";
import BlueMonster from "../assets/Home/blueMonster.webp";
import RedMonster from "../assets/Home/redMonster.webp";
import TvMonster from "../assets/Home/TvMonster.webp";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";
import { ACCESS_TOKEN } from "../constants";
function Home(){


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
  
    return(
    <>
      
    <div className="hidden md:inline md:absolute h-screen w-screen overflow-hidden ">
      <TopBar/>
        <img src="./Bg/kidzBackground.webp" alt="background" className="w-full"/>

        <Link to="/stories"><img src={TvMonster} alt="Monster Button for stories page" className="absolute left-[15%] bottom-[46%] h-[25%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000" /></Link>

        <Link to="/numbers"><img src={RedMonster} alt="Monster Button for numbers page" className="absolute right-[13%] bottom-[15%] h-[35%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000 "/></Link>
        
        <Link to="/alphabets"><img src={BlueMonster} alt="Monster Button for alphabet page" className="absolute left-[7%] bottom-[5%] h-[41%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000"/></Link>

        <Link to="/shapes"><img id="ewan1" src={OrangeMonster} alt="Monster Button for shapes page" className="absolute left-1/2 transform -translate-x-1/2  bottom-0  h-[35%] motion-preset-pulse-sm motion-duration-2000 hover:opacity-85"/></Link>
    </div>
    </>
);
}
export default Home