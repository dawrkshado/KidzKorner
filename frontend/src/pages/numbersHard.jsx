import TopBar from "../components/TopBar";
import Back from "../components/Back";
import hardnumberbutton1 from "../assets/Number/hardnumberbutton1.png";

import { Link } from "react-router-dom";
function numbersHard(){

  return(<>
 <div className="hidden w-full md:inline md:absolute h-auto">
  <TopBar/>
  <Back/>
  <img src="./Bg/Number/hardnumberbg.png" 
  alt="Number medium game background" 
  className="w-full"/>

<Link to={"/number/hard/level1"}>
    <img src={hardnumberbutton1} 
    alt="Button for Level 1 Number"
    className="absolute left-[50%] top-[50%] w-auto cursor-pointer h-auto"/>
   </Link>

 </div>
    </>

  )
}

export default numbersHard