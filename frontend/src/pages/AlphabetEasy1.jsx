import { useState, useEffect } from "react";
import a from "../assets/Alphabets/Easy/letterA.webp";
import b from "../assets/Alphabets/Easy/letterB.webp";
import c from "../assets/Alphabets/Easy/letterC.webp";
import d from "../assets/Alphabets/Easy/letterD.webp";
import bg from "../assets/Alphabets/Easy/bg.webp";

import OneStar from "../assets/Done/OneStar.webp"; 
import TwoStar from "../assets/Done/TwoStar.webp"; 
import ThreeStar from "../assets/Done/ThreeStar.webp"; 

import api from "../api";
import ReplayNBack from "../components/ReplayNBack";

function ShapesEasyLevel1() {
  const selectedChild = JSON.parse(localStorage.getItem("selectedChild"));
  const childId = selectedChild?.id;

  const clickables = [
    {
      Answer: "A",
      choices: [
        { value: "A", img: a },
        { value: "B", img: b },
        { value: "C", img: c },
        { value: "D", img: d }
      ]
    }
  ];

  const [isGameFinished, setGameFinished] = useState(false);
  const [count, setCount] = useState(1);
  const [index] = useState(0);

  // Timer logic
  useEffect(() => {
    if (isGameFinished) return;

    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isGameFinished]);

  const logic = (choice) => {
    if (choice === clickables[index].Answer) {
   
      setTimeout(() => {
        setGameFinished(true);
      }, 100); 
    } else {
      alert("wrong!");
    }
  };

  {/*Saving*/}
  useEffect(() => {
    if (!isGameFinished || !childId) return;


    const data = {
      child_id: childId,
      game: "Alphabet",
      difficulty: "Medium",
      level: 1,
      time: count,
    };

    console.log("Saving progress:", data);

    api.post("/api/save_progress/", data)
      .then((res) => console.log("Progress saved:", res.data))
      .catch((err) => console.error("Error saving progress:", err));
  }, [isGameFinished]);

  return (
    <div className="font-[coiny]">
      <img src={bg} alt="background" className="w-full" />
      <h1 className="absolute top-15 right-112 text-3xl text-white">
        Can You Find Letter {clickables[index].Answer}
      </h1>

      {!isGameFinished && (
        <>
          <div className="absolute top-0 right-0 text-white">Your Time: {count}</div>
          <div className="flex justify-evenly justify-self-center w-150 absolute top-40">
            {clickables[index].choices.map((choice, i) => (
              <img
                key={i}
                onClick={() => logic(choice.value)}
                className="h-30 cursor-pointer"
                src={choice.img}
                alt={choice.value}
              />
            ))}
          </div>
        </>
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

export default ShapesEasyLevel1;
