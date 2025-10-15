import TopBar from "../components/TopBar"
import { Link } from "react-router-dom"
import numbereasy from "../assets/Number/numbereasy.png";
import numbermedium from "../assets/Number/numbermedium.png";
import numberhard from "../assets/Number/numberhard.png";
import Back from "../components/Back";
import ReplayNBack from "../components/ReplayNBack";

function NumberGame(){

  return(<>

  <div className="hidden w-full md:inline md:absolute h-[100%]">
        <TopBar/>
        <Back/>
        <img
        src="./Bg/Number/numbergamebg.png"
        alt="background"
        className="w-full"
        />

    <Link to="/numbereasy">
            <img 
            src={numbereasy} 
            alt="Easy Button"
            className="absolute left-[5%] top-[13%] h-[25%] cursor-pointer" />
            </Link>

    <Link to="/numbermedium">
            <img 
            src={numbermedium} 
            alt="Easy Button"
            className="absolute left-[30%] top-[43%] w-auto h-[25%] cursor-pointer" />
            </Link>
    
    <Link to="/numberhard">
            <img 
            src={numberhard} 
            alt="Easy Button"
            className="absolute left-[55%] top-[73%] w-auto h-[25%] cursor-pointer" />
            </Link>
  </div>
  </>
  );

}
export default NumberGame