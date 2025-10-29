import { useState, useEffect } from "react";
import a from "../assets/Alphabets/Easy/letterA.webp";
import b from "../assets/Alphabets/Easy/letterB.webp";
import c from "../assets/Alphabets/Easy/letterC.webp";
import d from "../assets/Alphabets/Easy/letterD.webp";
import bg from "../assets/Alphabets/Easy/bg.webp";

import OneStar from "../assets/Done/OneStar.webp";
import TwoStar from "../assets/Done/TwoStar.webp";
import ThreeStar from "../assets/Done/ThreeStar.webp";

import ReplayNBack from "../components/ReplayNBack";
import findA from "../assets/Sounds/findA.mp3";

function ShapesEasyLevel1() {
  const clickables = [
    {
      Answer: "A",
      choices: [
        { value: "A", img: a },
        { value: "B", img: b },
        { value: "C", img: c },
        { value: "D", img: d },
      ],
    },
  ];

  const [isGameFinished, setGameFinished] = useState(false);
  const [count, setCount] = useState(0);
  const [index] = useState(0);

  useEffect(() => {
    if (isGameFinished) return;

    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isGameFinished]);

  useEffect(() => {
    const audio = new Audio(findA);
    audio.play().catch((err) => console.log("Autoplay blocked:", err));

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const logic = (choice) => {
    if (choice === clickables[index].Answer) {
      setGameFinished(true);
    } else {
      alert("Wrong!");
    }
  };

  return (
    <div className="font-[coiny]">
      <img src={bg} alt="background" className="w-full" />
      <h1 className="absolute top-15 right-149 text-3xl text-white">
        Can You Find Letter {clickables[index].Answer}
      </h1>

      <div className="absolute top-0 right-0 text-white">Your Time: {count}</div>

      {!isGameFinished && (
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
      )}

      {isGameFinished && count <= 10 && (
        <div className="absolute inset-0 flex items-center h-full w-full justify-center bg-opacity-50 z-20">
          <img
            src={ThreeStar}
            alt="Game Completed!"
            className="h-[300px] animate-bounce"
          />
          <div className="absolute bottom-[20%]">
            <ReplayNBack />
          </div>
        </div>
      )}

      {isGameFinished && count <= 15 && count > 10 && (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 z-20">
          <img
            src={TwoStar}
            alt="Game Completed!"
            className="h-[300px] animate-bounce"
          />
          <div className="absolute bottom-[20%]">
            <ReplayNBack />
          </div>
        </div>
      )}

      {isGameFinished && count > 15 && (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 z-20">
          <img
            src={OneStar}
            alt="Game Completed!"
            className="h-[300px] animate-bounce"
          />
          <div className="absolute bottom-[20%]">
            <ReplayNBack />
          </div>
        </div>
      )}
    </div>
  );
}

export default ShapesEasyLevel1;
