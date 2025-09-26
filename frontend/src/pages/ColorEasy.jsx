import TopBar from "../components/TopBar";
import Back from "../components/Back";
import easycolorl1 from "../assets/color/easycolorl1.png";
import easycolorl2 from "../assets/color/easycolorl2.png";
import easycolorl3 from "../assets/color/easycolorl3.png";
import { Link } from 'react-router-dom'

function ColorEasy(){

  return(<>
 <div className="hidden w-full md:inline md:absolute h-auto">
  <TopBar/>
  <Back/>
  <img src="/Bg/Color/easycolor.webp" 
  alt="Easy game background" 
  className="w-full"/>

  <Link to={"/color/easy/level1"}>
  <img src={easycolorl1} 
  alt="Button for Level 1 Color"
  className="absolute left-[30%] top-[30%] w-auto cursor-pointer h-auto"/>
  </Link>

  <Link to={"/color/easy/level2"}>
  <img src={easycolorl2} 
  alt="Button for Level 2 Color"
  className="absolute left-[50%] top-[50%] w-auto cursor-pointer h-auto"/>
 </Link>

 <Link to={"/color/easy/level3"}>
  <img src={easycolorl3} 
  alt="Button for Level 3 Color"
  className="absolute left-[70%] top-[30%] w-auto cursor-pointer h-auto"/>
 </Link>

   </div>
    </>

  );

}
export default ColorEasy