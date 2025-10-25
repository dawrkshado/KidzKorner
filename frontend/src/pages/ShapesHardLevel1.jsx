import { useState,useEffect } from "react";
import bg from "../assets/Shapes/ShapesHard/bg.webp";
import wrongImage from "../assets/Alphabets/Hard/cross.gif" 
import board from "../assets/Shapes/ShapesHard/board.webp"

import triangle from "../assets/Shapes/ShapesMedium/level1/draggableTriangle.webp";
import circle from "../assets/Shapes/ShapesMedium/level1/circleDraggable.webp";
import square from "../assets/Shapes/ShapesMedium/level1/draggableSquare.webp";
import oblong from "../assets/Shapes/ShapesMedium/level2/oblongDraggable.webp";
import star from "../assets/Shapes/ShapesMedium/level2/starDraggable.webp";

import OneStar from "../assets/Done/OneStar.webp"; 
import TwoStar from "../assets/Done/TwoStar.webp"; 
import ThreeStar from "../assets/Done/ThreeStar.webp"; 

import ReplayNBack from "../components/ReplayNBack";
import api from "../api";
    
function ShapesHardLevel1() {
  const [clicked, setClicked] = useState([]);
  const [showWrong, setShowWrong] = useState(false);
  const selectedChild = JSON.parse(localStorage.getItem("selectedChild"));
  const childId = selectedChild?.id;

  const numbers = [
  { value: "triangle", img: triangle, top: 575, left: 395, width: 60, height: 60 },
  { value: "circle", img: circle, top: 450, left: 20, width: 70, height: 70 },
  { value: "oblong", img: oblong, top: 340, left: 850, width: 73, height: 73 },
  { value: "star", img: star, top: 500, left: 480, width: 45, height: 45 },
  { value:"square", img: square, top: 490, left: 1150, width: 40, height: 40},
  ];



  const handleClick = (item, e) => {
    e.stopPropagation();
    if (!clicked.includes(item)) {
      setClicked([...clicked, item]);
    }
  };

  const handleBoardClick = (e) => {
    e.stopPropagation(); 
  };

  const handleBackgroundClick = () => {
    if (!isGameFinished) {
      setShowWrong(true);
      setTimeout(() => setShowWrong(false), 2500);
    }
  };


  const isGameFinished = clicked.length === numbers.length;

   const [count, setCount] = useState(1);
      
        useEffect(() => {
          if (isGameFinished) return; 
      
          const interval = setInterval(() => {
            setCount((prev) => prev + 1);
          }, 1000);
      
          return () => clearInterval(interval); 
        }, [isGameFinished]);

        useEffect(() => {
    if (isGameFinished) return;

    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isGameFinished]);



    useEffect(() => {
    if (!isGameFinished || !childId) return;


    const data = {
      child_id: childId,
      game: "Shape",
      difficulty: "Hard",
      level: 1,
      time: count,
    };

    console.log("Saving progress:", data);

    api.post("/api/save_progress/", data)
      .then((res) => console.log("Progress saved:", res.data))
      .catch((err) => console.error("Error saving progress:", err));
  }, [isGameFinished]);



  return (
    <div className="absolute w-[100vw] h-[100vh] font-[coiny]"
         onClick={handleBackgroundClick}>
      <img src={bg} alt="background" className="absolute w-full h-full" />
      <div className="absolute top-0 right-0 text-white">Your Time: {count}</div>
      <div className="absolute h-83 w-180" onClick={handleBoardClick}>
        <img src={board} alt="blackboard hint" className="absolute h-83 w-180 z-10"/>
      </div>
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
            className="object-contain "
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

    {/* Results */}
      {isGameFinished && count <= 10 && (
        <div className="absolute inset-0 flex items-center h-full w-full justify-center bg-opacity-50 z-20">
          <img src={ThreeStar} alt="Game Completed!" className="h-[300px] animate-bounce" />
          <div className="absolute bottom-[20%]">
            <ReplayNBack />
          </div>
        </div>
      )}

      {isGameFinished && count <= 15 && count > 10 && (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 z-20">
          <img src={TwoStar} alt="Game Completed!" className="h-[300px] animate-bounce" />
          <div className="absolute bottom-[20%]">
            <ReplayNBack />
          </div>
        </div>
      )}

      {isGameFinished && count > 15 && (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 z-20">
          <img src={OneStar} alt="Game Completed!" className="h-[300px] animate-bounce" />
          <div className="absolute bottom-[20%]">
            <ReplayNBack />
          </div>
        </div>
      )}
      
    </div>
  );
}

export default ShapesHardLevel1;