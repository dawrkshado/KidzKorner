import { Link } from "react-router-dom"
import Medium1 from "../assets/Shapes/ShapesMedium/level1.webp"
import Medium2 from "../assets/Shapes/ShapesMedium/level2.webp"
import Back from "../components/Back"
import TopBar from "../components/TopBar"


function ShapesMedium(){

  return(<>


  <div className="absolute overflow-y-hidden h-full w-full">
    <TopBar/>
    <Back/>
    <img src="/Bg/Shapes/shapesMediumBg.webp" alt="" className="w-[100vw]"/>
    <Link to="level1">
    <img src={Medium1} alt="Button for level1" 
    className="absolute left-[30%] bottom-0 h-[45%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000" /> </Link>
     <Link to="level2">
     <img src={Medium2} alt="Button for level2" 
    className="absolute left-[70%] bottom-0 h-[75%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000"/> </Link>
    
  </div>
  </>)
}

export default ShapesMedium