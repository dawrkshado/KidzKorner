import TopBar from "../components/TopBar";
import Back from "../components/Back";
import hardbuttoncolor from "../assets/color/hardbuttoncolor.png";

import { Link } from 'react-router-dom'

function ColorHard(){

  return(<>
 <div className="hidden w-full md:inline md:absolute h-auto">
  <TopBar/>
  <Back/>
  <img src="/Bg/Color/hardcolorbg.webp" 
  alt="Hard game background" 
  className="w-full"/>

   <Link to={"/color/hard/level1"}>
    <img src={hardbuttoncolor} 
    alt="Button for Level 1 Color"
    className="absolute left-[50%] top-[30%] w-auto cursor-pointer h-auto"/>
   </Link>
  
 </div>
    </>

  );

}

export default ColorHard