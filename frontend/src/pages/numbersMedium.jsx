import TopBar from "../components/TopBar";
import Back from "../components/Back";
import mednumberl1 from "../assets/Number/mednumberl1.png";
import mednumberl2 from "../assets/Number/mednumberl2.png";

import { Link } from "react-router-dom";
function numbersMedium(){

  return(<>
 <div className="hidden w-full md:inline md:absolute h-auto">
  <TopBar/>
  <Back/>
  <img src="./Bg/Number/mediumnumberbg.png" 
  alt="Number medium game background" 
  className="w-full"/>

<Link to={"/number/medium/level1"}>
    <img src={mednumberl1} 
    alt="Button for Level 1 Number"
    className="absolute left-[20%] top-[50%] w-auto cursor-pointer h-auto"/>
   </Link>

<Link to={"/number/medium/level2"}>
<img src={mednumberl2} 
alt="Button for Level 2 Number"
className="absolute left-[60%] top-[50%] w-auto cursor-pointer h-auto" />
</Link>

 </div>
    </>

  )
}

export default numbersMedium