
import TopBar from "../components/TopBar";
import Back from "../components/Back";
import easynumberl1 from "../assets/Number/easynumberl1.png";
import easynumberl2 from "../assets/Number/easynumberl2.png";
import easynumberl3 from "../assets/Number/easynumberl3.png";
import { Link } from "react-router-dom";
function numbersEasy(){

  return(<>
 <div className="hidden w-full md:inline md:absolute h-auto">
  <TopBar/>
  <Back/>
  <img src="./Bg/Number/numbereasybg.png" 
  alt="Number easy game background" 
  className="w-full"/>

<Link to={"/number/easy/level1"}>
    <img src={easynumberl1} 
    alt="Button for Level 1 Number"
    className="absolute left-[22%] top-[60%] w-auto cursor-pointer h-auto"/>
   </Link>

<Link to={"/number/easy/level2"}>
<img src={easynumberl2} 
alt="Button for Level 2 Number"
className="absolute left-[42%] top-[20%] w-auto cursor-pointer h-auto" />
</Link>

<Link to={"/number/easy/level3"}>
<img src={easynumberl3}
alt="Button for Level 3 Number"
className="absolute left-[62%] top-[60%] w-auto cursor-pointer h-auto"/>
</Link>
  
 </div>
    </>

  )
}

export default numbersEasy