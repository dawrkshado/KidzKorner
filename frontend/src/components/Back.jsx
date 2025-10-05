import { useNavigate } from "react-router-dom"
import Backimg from "../assets/Back n Replay/Back.webp"
function Back(){
  const navigate = useNavigate()

  return(<>
  <div onClick={()=>navigate(-1)} className=" h-fit w-fit  absolute z-1 hover:cursor-pointer"> 
    <img src={Backimg} alt="Back Button" className="h-15 w-30"/>  
  </div>

  </>)  
}

export default Back