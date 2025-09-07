import { useNavigate } from "react-router-dom"
function Back(){
  const navigate = useNavigate()

  return(<>
  <div onClick={()=>navigate(-1)} className="bg-red-500 h-10 w-10 absolute z-1 hover:cursor-pointer"> Back </div>

  </>)  
}

export default Back