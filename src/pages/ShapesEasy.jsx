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
  <div className="absolute flex justify-around">
    <Link to="/easyLevel"><img src={Easy1} alt="Button to go to Level1" className="absolute h-[15%] w-[15%] left-[10%]" /></Link>
    <Link to="/easyLevel2"><img src={Easy2} alt="Button to go to Level2" className="absolute h-[15%] w-[15%] left-[25%]"/></Link>
    <Link to="/easyLevel3"><img src={Easy3} alt="Button to go to Level3" className="absolute h-[15%] w-[15%] left-[40%]"/></Link>
    <Link to="/easyLevel4"><img src={Easy4} alt="Button to go to Level4" className="absolute h-[15%] w-[15%] left-[55%]"/></Link>
    <Link to="/easyLevel5"><img src={Easy5} alt="Button to go to Level5" className="absolute h-[15%] w-[15%] left-[70%]"/></Link>
  </div>
  
  </>
  )

}

export default ShapesEasy