import Hard1 from "../assets/Shapes/ShapesHard/level1.webp"
import { Link } from "react-router-dom";



function ShapesHard(){

  return(<>

  <div className="absolute overflow-y-hidden">
    <img src="/Bg/Shapes/shapesHardBg.webp" alt=""  className="w-[100vw]" />
    <Link to="level1">
    <img src={Hard1} alt="Button for level1" className="absolute left-[50%] bottom-0 h-[60%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000" />
   </Link>

  </div>
  </>)
}

export default ShapesHard