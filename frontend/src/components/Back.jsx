import { useNavigate } from "react-router-dom"
import backlatest from "../assets/Parents/backlatest.webp"
function Back(){
  const navigate = useNavigate()

  return(<>
  <div onClick={()=>navigate(-1)} className=" w-auto left-[1%] top-[1%]  absolute z-1 hover:cursor-pointer"> 
    <img src={backlatest} alt="Back Button" className="w-20 h -20"/>  
  </div>

  </>)  
}

export default Back