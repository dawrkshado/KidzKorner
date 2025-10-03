import TopBar from "../components/TopBar";
import Back from "../components/Back";
import avebutton1 from "../assets/color/avebutton1.png";
import avebutton2 from "../assets/color/avebutton2.png";
import { Link } from 'react-router-dom'

function ColorMedium(){

  return(<>
   <div className="hidden w-full md:inline md:absolute h-auto">
  <TopBar/>
  <Back/>
  <img src="/Bg/Color/averagecolorbg.webp" 
  alt="Medium game background" 
  className="w-full"/>

   <Link to={"/color/medium/level1"}>
  <img src={avebutton1} 
  alt="Button for Level 1 Color"
  className="absolute left-[40%] top-[30%] w-auto cursor-pointer h-auto"/>
 </Link>

 <Link to={"/color/medium/level2"}>
  <img src={avebutton2} 
  alt="Button for Level 2 Color"
  className="absolute left-[60%] top-[50%] w-auto cursor-pointer h-auto"/>
 </Link>

   </div>
    </>

  );

}

export default ColorMedium