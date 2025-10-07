import Back from "../components/Back"
import Easy1 from "../assets/Shapes/ShapesEasy/Easy1.webp"
import Easy2 from "../assets/Shapes/ShapesEasy/Easy2.webp"
import Easy3 from "../assets/Shapes/ShapesEasy/Easy3.webp"
import TopBar from "../components/TopBar"
import { Link } from 'react-router-dom'

function ShapesEasy(){
  return(<>

  <div className="absolute flex justify-around overflow-y-hidden h-[100vh] w-[100vw]">
    <div className="absolute top-0 left-0  w-full z-10"> <TopBar/></div>
    <div className="absolute top-12.5 left-0 h-15 w-30 z-10"><Back/></div>
      
    <img src="/Bg/Shapes/shapesEasyBg.webp" alt="" className="h-[100vh] w-[100vw] absolute" />

    <Link to="level1"><img src={Easy1} alt="Button to go to Level1" className="absolute h-[40%] w-[20%] left-[15%] bottom-[6%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000"/></Link>
    <Link to="level2"><img src={Easy2} alt="Button to go to Level2" className="absolute h-[40%] w-[20%] left-[42%] bottom-[40%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000"/></Link>
    <Link to="level3"><img src={Easy3} alt="Button to go to Level3" className="absolute h-[40%] w-[20%] left-[65%] bottom-[6%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000"/></Link>
    
  </div>
  </>
  )
}

export default ShapesEasy