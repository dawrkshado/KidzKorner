import TopBar from "../components/TopBar"
import { Link } from "react-router-dom"
import coloreasy from "../assets/Color/coloreasy.png";
import colormedium from "../assets/Color/colormedium.png";
import colorhard from "../assets/Color/colorhard.png";

function ColorGame(){
  return(
    <>
    <div className="hidden w-full md:inline md:absolute h-auto">
        <TopBar/>
        <img
        src="/Bg/Color/colorlevelbg.png"
        alt="background"
        className="w-full"
        />

        <Link to="/coloreasy">
        <img 
        src={coloreasy} 
        alt="Easy Button"
        className="absolute left-[5%] top-[13%] w-auto cursor-pointer" />
        </Link>

        <Link to="/colormedium">
        <img
        src={colormedium}
        alt="Medium Button"
        className="absolute left-[30%] top-[43%] w-auto cursor pointer"/>

        </Link>
        <Link to="/colorhard">
        <img
        src={colorhard}
        alt="Hard Button"
        className="absolute left-[55%] top-[73%] w-auto cursor pointer"/>
        </Link>
    </div>
  </>
  );
  
}
export default ColorGame