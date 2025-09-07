import Medium1 from "../assets/Shapes/ShapesMedium/level1.webp"
import Medium2 from "../assets/Shapes/ShapesMedium/level2.webp"
import Medium3 from "../assets/Shapes/ShapesMedium/level3.webp"

function ShapesMedium(){

  return(<>

  <div className="absolute overflow-y-hidden">
    <img src="/Bg/Shapes/shapesMediumBg.webp" alt="" />
    <img src={Medium1} alt="Button for level1" className="absolute left-[20%] bottom-0 h-[45%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000" />
    <img src={Medium2} alt="Button for level2" className="absolute left-[50%] bottom-0 h-[75%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000"/>
    <img src={Medium3} alt="Button for level3" className="absolute left-[75%] bottom-0 h-[85%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000"/>
  </div>
  </>)
}

export default ShapesMedium