import { useState } from "react"
import { useNavigate } from "react-router-dom"
function AnimalLesson5(
){const [clicked,setClicked] = useState()
  const [clickedID,setClickedID] = useState()

  const handleClick = (button) => {
      setClicked(true)
      setClickedID(button)

  }
  const handleExit = () =>{
    setClicked(false)
    setClickedID(null)
  }
 

  const navigate = useNavigate()

  
  return(<>

  <div className="flex h-[100vh] w-[100vw]">
    <div className="h-[40%] w-[40%] border-2 content-center place-items-center text-5xl"><p>VIDEO</p></div>
    <div onClick={() => handleClick("Exercises")} className="hover:cursor-pointer h-[25%] w-[25%] border-2 content-center place-items-center text-5xl"><p>Exercises</p></div>
    <div onClick={() => handleClick("Activities")} className="hover:cursor-pointer h-[25%] w-[25%] border-2 content-center place-items-center text-5xl"><p>Activities</p></div>
  </div>

    {clicked && clickedID === "Exercises" && 

      <div className="h-[100vh] w-[100vw] bg-blue-900 fixed top-0 z-50">
       
        <div onClick={handleExit} className="bg-red-600 absolute right-[3%] top-[3%] h-10 w-10 rounded-4xl content-center place-items-center hover:cursor-pointer"><p>X</p></div>
      
      </div>}

       {clicked && clickedID === "Activities" && 

      <div className="h-[100vh] w-[100vw]  bg-green-900 absolute top-0 z-50">
        
        <div onClick={handleExit} className="bg-red-600 absolute right-[3%] top-[3%] h-10 w-10 rounded-4xl content-center place-items-center hover:cursor-pointer"><p>X</p></div>
          <div onClick={()=>navigate("/lessons/animals/lesson5/activity1")} className="bg-amber-400 hover:cursor-pointer  h-[255px] w-[255px] flex justify-center place-items-center text-4xl">Activity1</div>
          <div onClick={()=>navigate("/lessons/animals/lesson5/activity2")} className="bg-fuchsia-700 hover:cursor-pointer h-[255px] w-[255px] flex justify-center place-items-center"><p className="text-4xl">Activity2</p></div>
      
      </div>}

  </>)
}
export default AnimalLesson5