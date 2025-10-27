
import { Link } from "react-router-dom"
import coloreasy from "../assets/Color/coloreasy.png";
import colormedium from "../assets/Color/colormedium.png";
import colorhard from "../assets/Color/colorhard.png";
import Back from "../components/Back";



function ColorGame(){
  return(
    <>
    <div className="hidden w-full md:inline md:absolute h-[100%]">

        <Back/>
        <img
        src="/Bg/Color/colorlevelbg.webp"
        alt="background"
        className="w-full"
        />

        <Link to="/color/easy">
        <img 
        src={coloreasy} 
        alt="Easy Button"
        className="absolute left-[5%] top-[13%] h-[25%] cursor-pointer" />
        </Link>

        <Link to="/color/medium">
        <img
        src={colormedium}
        alt="Medium Button"
        className="absolute left-[30%] top-[43%] h-[25%] cursor pointer"/>
        </Link>
        <Link to="/color/hard">
        <img
        src={colorhard}
        alt="Hard Button"
        className="absolute left-[55%] top-[73%] h-[25%] cursor pointer"/>
        </Link>
    </div>
  </>
  );
  
}
export default ColorGame