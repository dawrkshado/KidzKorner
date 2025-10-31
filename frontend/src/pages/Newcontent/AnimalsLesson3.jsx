import { useState } from "react"
function AnimalLesson3(
){
const [clicked,setClicked] = useState()
  const [clickedID,setClickedID] = useState()

  const handleClick = (button) => {
      setClicked(true)
      setClickedID(button)

  }
  const handleExit = () =>{
    setClicked(false)
    setClickedID(null)
  }
  
  return(<>
  <div className="flex h-[100vh] w-[100vw]">
    <div className="h-[40%] w-[40%] border-2 content-center place-items-center text-5xl"><p>VIDEO</p></div>
    <div onClick={() => handleClick("Exercises")} className="hover:cursor-pointer h-[25%] w-[25%] border-2 content-center place-items-center text-5xl"><p>Exercises</p></div>
    <div onClick={() => handleClick("Activities")} className="hover:cursor-pointer h-[25%] w-[25%] border-2 content-center place-items-center text-5xl"><p>Activities</p></div>
  </div>

    {clicked && clickedID === "Exercises" && 
      <div className="h-[100vh] w-[100vw] bg-blue-900 absolute top-0 z-50">
        <div onClick={handleExit} className="bg-red-600 absolute right-[3%] top-[3%] h-10 w-10 rounded-4xl content-center place-items-center"><p>X</p></div>
      </div>}

       {clicked && clickedID === "Activities" && 
      <div className="h-[100vh] w-[100vw] bg-green-900 absolute top-0 z-50">
        <div onClick={handleExit} className="bg-red-600 absolute right-[3%] top-[3%] h-10 w-10 rounded-4xl content-center place-items-center"><p>X</p></div>
      </div>}

  </>)
}
export default AnimalLesson3