import { useState, useEffect } from "react";

import letterW from "../assets/Alphabets/Hard/letterW.webp";
import letterX from "../assets/Alphabets/Hard/letterX.webp";
import letterY from "../assets/Alphabets/Hard/letterY.webp";
import letterZ from "../assets/Alphabets/Hard/letterZ.webp";

import OneStar from "../assets/Done/OneStar.webp"; 
import TwoStar from "../assets/Done/TwoStar.webp"; 
import ThreeStar from "../assets/Done/ThreeStar.webp"; 

import bg from "../assets/Alphabets/Hard/bg.webp"
import wrongImage from "../assets/Alphabets/Hard/cross.gif" 

import ReplayNBack from "../components/ReplayNBack";
import api from "../api";

function AlphabetHard() {
  const [clicked, setClicked] = useState([]);
  const [showWrong, setShowWrong] = useState(false);
  const selectedChild = JSON.parse(localStorage.getItem("selectedChild"));
  const childId = selectedChild?.id;

  const numbers = [
    { value: "W", img: letterW, top: 410, left: 650, width: 70, height: 70 },
    { value: "X", img: letterX, top: 520, left: 250, width: 80, height: 80 },
    { value: "Y", img: letterY, top: 400, left: 1100, width: 70, height: 70 },
    { value: "Z", img: letterZ, top: 30, left: 720, width: 50, height: 50 },
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

  useEffect(() => {
    if (!isGameFinished) return;
    
    if (!childId) {
      console.warn("No child selected!");
      return;
    }

    const data = {
      child_id: childId,
      game: "Alphabet",
      difficulty: "Hard",
      level: 1,
      time: count,
    };

    api.post("/api/save_progress/", data)
      .then((res) => console.log("Progress saved:", res.data))
      .catch((err) => console.error("Error saving progress:", err));
  }, [isGameFinished]);


  return (
    <div 
      className="flex h-[100vh] w-[100vw] [&>*]:flex absolute [&>*]:font-[coiny] overflow-hidden bg-cover bg-bottom" 
      onClick={handleBackgroundClick}
    > 

    <img src={bg} alt="background Image" className="absolute w-[100vw] h-[100vh]" />
      {!isGameFinished && (<>
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
      </>)}

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
      {isGameFinished && count <= 20 && (
        <div className="absolute inset-0 flex items-center h-full w-full justify-center bg-opacity-50 z-20">
          <img src={ThreeStar}
            alt="Game Completed!"
            className="h-[300px] animate-bounce"
          />
          <div className="absolute bottom-[20%]">
            <ReplayNBack/>
          </div>
        </div>
      )}

      {isGameFinished && count <= 25 && count > 20 && (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 z-20">
          <img
            src={TwoStar}
            alt="Game Completed!"
            className="h-[300px] animate-bounce"
          />
          <div className="absolute bottom-[20%]">
            <ReplayNBack/>
          </div>
        </div>
      )}

      {isGameFinished && count > 20 && (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 z-20">
          <img
            src={OneStar}
            alt="Game Completed!"
            className="h-[300px] animate-bounce"
          />
          <div className="absolute bottom-[20%]">
            <ReplayNBack/>
          </div>
        </div>
      )}
    </div>
  );
}

export default AlphabetHard;