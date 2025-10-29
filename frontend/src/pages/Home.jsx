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
import { useLocation } from "react-router-dom";

function Home(){

  const location = useLocation();
  const [child, setChild] = useState(location.state?.child || null);

  
  useEffect(() => {
    if (!child) {
      const storedChild = localStorage.getItem("selectedChild");
      if (storedChild) {
        setChild(JSON.parse(storedChild));
      }
    }
  }, [child]);


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

    
    <div className="hidden w-[100vw] md:inline md:absolute h-[100%] overflow-hidden">
      <div>
      <h1>Welcome {child ? child.first_name : "Guest"}!</h1>
    </div>
      <Link to="/parentskorner"><div className="bg-black flex  h-30 w-30 justify-center items-center text-white absolute">To Parent</div></Link>
       
       <Link to="/uploadedFiles"><div className="absolute h-30 w-30 bg-amber-500 text-amber-50 right-100">files</div></Link>
       
        <img src="./Bg/kidzBackground.webp" alt="background" className="w-full"/>
          
        <Link to="/color"><img src={redmonster} alt="Monster Button for color page" className="absolute right-[22%] bottom-[10%] h-[35%] transition transform hover:opacity-70 motion-preset-pulse-sm motion-duration-2000 "/></Link>

        <Link to="/stories"><img src={TvMonster} alt="Monster Button for stories page" className="absolute left-[15%] bottom-[42%] h-[25%] transition transform hover:opacity-70 motion-preset-pulse-sm motion-duration-2000" /></Link>

        <Link to="/number"><img src={bluemonster} alt="Monster Button for numbers page" className="absolute right-[10%] bottom-[0%] h-[35%] transition transform hover:opacity-70 motion-preset-pulse-sm motion-duration-2000 "/></Link>
        
        <Link to="/alphabets"><img src={BlueMonster} alt="Monster Button for alphabet page" className="absolute left-[5%] bottom-[0%] h-[41%] transition transform hover:opacity-70 motion-preset-pulse-sm motion-duration-2000"/></Link>

        <Link to="/shapes"><img id="shapemonster" src={OrangeMonster} alt="Monster Button for shapes page" className="absolute left-[30%]  transition transform bottom-[0%] h-[35%] motion-preset-pulse-sm motion-duration-2000 hover:opacity-85"/></Link>
    </div>
    </>
);
}
export default Home