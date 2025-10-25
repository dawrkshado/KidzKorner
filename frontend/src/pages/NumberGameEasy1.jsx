import { useState,useEffect } from "react";
import bg from "../assets/Number/Easy/bglvl2.webp";
import wrongImage from "../assets/Alphabets/Hard/cross.gif" 

import one from "../assets/Number/Easy/One.webp";
import two from "../assets/Number/Easy/two.webp";
import three from "../assets/Number/Easy/three.webp";
import four from "../assets/Number/Easy/four.webp";
import five from "../assets/Number/Easy/five.webp";

import OneStar from "../assets/Done/OneStar.webp"; 
import TwoStar from "../assets/Done/TwoStar.webp"; 
import ThreeStar from "../assets/Done/ThreeStar.webp"; 

import ReplayNBack from "../components/ReplayNBack";
import api from "../api";
    
function NumberGameEasy1() {
  const [clicked, setClicked] = useState([]);
  const [showWrong, setShowWrong] = useState(false);
  const selectedChild = JSON.parse(localStorage.getItem("selectedChild"));
  const childId = selectedChild?.id;

  const numbers = [
  { value: 1, img: one, top: 575, left: 395, width: 35, height: 35 },
  { value: 2, img: two, top: 450, left: 250, width: 25, height: 25 },
  { value: 3, img: three, top: 60, left: 70, width: 40, height: 40 },
  { value: 4, img: four, top: 80, left: 1090, width: 45, height: 45 },
  { value: 5, img: five, top: 490, left: 1150, width: 40, height: 40},
  ];



  const handleClick = (item, e) => {
    e.stopPropagation();
    if (!clicked.includes(item)) {
      setClicked([...clicked, item]);
    }
  };

  const handleBackgroundClick = () => {
    if (!isGameFinished) {
      setShowWrong(true);
      setTimeout(() => setShowWrong(false), 2500);
    }
  };

  const isGameFinished = clicked.length === numbers.length;

   const [count, setCount] = useState(0);
      
        useEffect(() => {
          if (isGameFinished) return; 
      
          const interval = setInterval(() => {
            setCount((prev) => prev + 1);
          }, 1000);
      
          return () => clearInterval(interval); 
        }, [isGameFinished]);



         {/*Saving*/}
  useEffect(() => {
    if (!isGameFinished || !childId) return;


    const data = {
      child_id: childId,
      game: "Number",
      difficulty: "Easy",
      level: 1,
      time: count,
    };

    console.log("Saving progress:", data);

    api.post("/api/save_progress/", data)
      .then((res) => console.log("Progress saved:", res.data))
      .catch((err) => console.error("Error saving progress:", err));
  }, [isGameFinished]);

  return (
    <div className="absolute w-[100vw] h-[100vh] font-[coiny]" onClick={handleBackgroundClick}>
      <img src={bg} alt="background" className="absolute w-full h-full" />
      
 
       <div className="absolute top-0 right-0 text-white">Your Time: {count}</div>
  {numbers.map((num, i) => (
        <div
          key={i}
          className="absolute cursor-pointer"
          style={{ top: num.top, left: num.left }}
          onClick={(e) => handleClick(num.value, e)}
        >
          {!clicked.includes(num.value) && (
            <img
            src={num.img}
            alt={`Number ${num.value}`}
            style={{ width: num.width, height: num.height }}
            className="object-contain"
            />

          )}
        </div>
      ))}

      {/* Wrong Image*/}
            {showWrong && (
              <div className="absolute inset-0 flex items-center justify-center  z-30 pointer-events-none h-[100vh] w-[100vw]">
                <img
                  src={wrongImage}
                  alt="Wrong"
                  className="h-[300px]"
                />
              </div>
            )}

{/*Results*/}
        {isGameFinished && count <= 10 &&(
          <div className="absolute inset-0 flex items-center h-full w-full justify-center bg-opacity-50 z-20  ">
            <img
              src={ThreeStar}
              alt="Game Completed!"
              className="h-[300px] animate-bounce"
            />

            <div className="absolute bottom-[20%] ">
                <ReplayNBack/>
            </div>

     
          </div>
        )}

    {isGameFinished && count <= 15 && count > 10 &&(
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 z-20">
          <img
            src={TwoStar}
            alt="Game Completed!"
            className="h-[300px] animate-bounce"
          />
             <div className="absolute bottom-[20%] ">
                <ReplayNBack/>
            </div>
        </div>
    )}

    {isGameFinished && count > 15 &&(
    <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 z-20">
    <img
      src={OneStar}
      alt="Game Completed!"
      className="h-[300px] animate-bounce"
    />
            <div className="absolute bottom-[20%] ">
                <ReplayNBack/>
            </div>
    </div>
    )}


      
    </div>
  );
}

export default NumberGameEasy1;
