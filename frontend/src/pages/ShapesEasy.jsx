import Back from "../components/Back"
import Easy1 from "../assets/Shapes/ShapesEasy/Easy1.webp"
import Easy2 from "../assets/Shapes/ShapesEasy/Easy2.webp"
import Easy3 from "../assets/Shapes/ShapesEasy/Easy3.webp"
import Easy4 from "../assets/Shapes/ShapesEasy/Easy4.webp"
import Easy5 from "../assets/Shapes/ShapesEasy/Easy5.webp"
import { Link } from 'react-router-dom'

function ShapesEasy(){
  return(<>
  <Back/>    
  <div className="absolute flex justify-around overflow-y-hidden">
    <img src="/Bg/Shapes/shapesEasyBg.webp" alt="" />
    <Link to="level1"><img src={Easy1} alt="Button to go to Level1" className="absolute h-[40%] w-[20%] left-[13%] bottom-[6%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000"/></Link>
    <Link to="level2"><img src={Easy2} alt="Button to go to Level2" className="absolute h-[40%] w-[20%] left-[30%] bottom-[40%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000"/></Link>
    <Link to="level3"><img src={Easy3} alt="Button to go to Level3" className="absolute h-[40%] w-[20%] left-[50%] bottom-[6%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000"/></Link>
    <Link to="level4"><img src={Easy4} alt="Button to go to Level4" className="absolute h-[40%] w-[20%] left-[65%] bottom-[45%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000"/></Link>
    <Link to="level5"><img src={Easy5} alt="Button to go to Level5" className="absolute h-[40%] w-[20%] left-[75%] bottom-0 hover:opacity-85 motion-preset-pulse-sm motion-duration-2000"/></Link>
  </div>
  </>
  )
}

export default ShapesEasy