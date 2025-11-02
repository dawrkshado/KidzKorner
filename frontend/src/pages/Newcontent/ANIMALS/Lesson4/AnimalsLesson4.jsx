import { useState } from "react"
import { useNavigate } from "react-router-dom"
import act1live from "../../../../assets/Animals/act1live.webp";
import act2live from "../../../../assets/Animals/act2live.webp";
import exerciselive from "../../../../assets/Animals/exerciselive.webp";
import activitylive from "../../../../assets/Animals/activitylive.webp";

function AnimalLesson4(
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

  <div className="relative w-full min-h-screen overflow-y-auto">
        <img
          src="/Bg/mainvidbg.webp"
          alt="Main background"
          className="w-full h-auto block"
        />
    <div onClick={() => handleClick("Exercises")}
                 className="hover:cursor-pointer absolute left-[61%] top-[15%]"
               >
                 <img
                   src={exerciselive}
                   alt="Exercises Button"
                   className="w-auto h-auto hover:scale-105 transition-transform duration-300"
                 /></div>
    <div onClick={() => handleClick("Activities")}
                  className="hover:cursor-pointer absolute w-auto left-[60%] top-[41%]"
                >
                  <img
                    src={activitylive}
                    alt="Activities Button"
                    className="w-auto h-auto hover:scale-105 transition-transform duration-300"
                  />
                  </div>
  </div>

    {clicked && clickedID === "Exercises" && 

      <div className="h-[100vh] w-[100vw] bg-blue-900 fixed top-0 z-50">
       
        <div onClick={handleExit} className="bg-red-600 absolute right-[3%] top-[3%] h-10 w-10 rounded-4xl content-center place-items-center hover:cursor-pointer"><p>X</p></div>
      
      </div>}

       {clicked && clickedID === "Activities" && 

      <div  className="fixed inset-0 z-50 flex flex-col justify-center items-center gap-10 bg-cover bg-center"
                style={{ backgroundImage: `url("/Bg/activitybg.webp")` }}
              >
              
              <div onClick={handleExit} className="bg-red-600 absolute right-[3%] top-[3%] h-10 w-10 rounded-4xl content-center place-items-center hover:cursor-pointer"><p>X</p></div>
               <img
                           src={act1live}
                           alt="Activity 1"
                           onClick={() => navigate("/lessons/animals/lesson4/activity1")}
                           className="w-auto hover:scale-105 transition-transform duration-300 cursor-pointer"
                         />
               
                         <img
                           src={act2live}
                           alt="Activity 2"
                           onClick={() => navigate("/lessons/animals/lesson4/activity2")}
                           className="w-auto hover:scale-105 transition-transform duration-300 cursor-pointer"
                         />
      
      </div>}

  </>)
}
export default AnimalLesson4