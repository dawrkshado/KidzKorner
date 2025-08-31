import Hard1 from "../assets/Shapes/ShapesHard/level1.webp"
import Hard2 from "../assets/Shapes/ShapesHard/level2.webp"


function ShapesHard(){

  return(<>

  <div className="absolute overflow-y-hidden">
    <img src="/Bg/Shapes/shapesHardBg.webp" alt="" />
    <img src={Hard1} alt="Button for level1" className="absolute left-[30%] bottom-0 h-[55%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000" />
    <img src={Hard2} alt="Button for level2" className="absolute left-[60%] bottom-0 h-[55%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000 "/>

  </div>
  </>)
}

export default ShapesHard