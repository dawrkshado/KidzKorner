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

<<<<<<< HEAD
import backgroundMusic from "../assets/Sounds/background.mp3";

import { motion } from "framer-motion";

import applause from "../assets/Sounds/applause.wav"
import { useWithSound } from "../components/useWithSound";
import { useNavigate } from "react-router-dom";
import useSound from 'use-sound';
import clickSfx from '../assets/Sounds/wrong_effect.mp3'; 

const PROGRESS_KEY = 'alphabetEasyProgress'; 

// Function to save completion status
function saveProgress(level) {
  const progress = JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {
    level1: false,
    level2: false,
    level3: false,
  };
  progress[level] = true;
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}
function AlphabetEasyLevel1() {
  const [playClick] = useSound(clickSfx, { volume: 0.5 });
  const navigate = useNavigate();
  const { playSound: playApplause, stopSound: stopApplause } = useWithSound(applause); 
=======
function ShapesEasyLevel1() {
  const selectedChild = JSON.parse(localStorage.getItem("selectedChild"));
  const childId = selectedChild?.id;

>>>>>>> 0b2d8e4be0cf3c8d80bfe466e3965a96eac7b42e
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

<<<<<<< HEAD

  const [isGameFinished,setGameFinished]= useState(false);

  const [count, setCount] = useState(0);

      const handleBackgroundClick = () => {
        if (!isGameFinished) {
          playClick();
            setShowWrong(true);
            setTimeout(() => setShowWrong(false), 2500);
        }
    };

     const logic = (choice) => {
   if (isGameFinished) return;

   if (choice === clickables[index].Answer) {
     // Correct Answer
      setGameFinished(true);
 } else {
     // Wrong Answer
      playClick(); 
      setShowWrong(true);
      setTimeout(() => setShowWrong(false), 2500);
      
   }
 };   

 useEffect(() => {
if (isGameFinished) return; 
                              
const interval = setInterval(() => {
setCount((prev) => prev + 1);
}, 1000);
                              
return () => clearInterval(interval); 
}, [isGameFinished]);
const [index] = useState(0);
                    
useEffect(() => {
const bgSound = new Audio(backgroundMusic);
bgSound.loop = true; 
bgSound.volume = 0.3; 
                        
bgSound.play().catch((err) => {
 console.log("Autoplay blocked by browser (user interaction required):", err);
  });
                    
return () => {
bgSound.pause();
bgSound.currentTime = 0;
};
}, []); 
                    
useEffect(() => {
let soundTimeout;
if (isGameFinished) {
playApplause(); 
 saveProgress("level1");
 
soundTimeout = setTimeout(() => {
stopApplause();
}, 8000); 
}
                    
return () => {
clearTimeout(soundTimeout);
stopApplause();
};
}, [isGameFinished, playApplause, stopApplause]);
                    
useEffect(() => {
if (isGameFinished) return;
const interval = setInterval(() => {
setCount((prev) => prev + 1);
}, 1000);
                    
return () => clearInterval(interval);
}, [isGameFinished]);
                      
function handleDragEnd(event) {
if (event.over && event.active.id === event.over.id) { 
const draggedId = event.active.id;
const droppedId = event.over.id;
                    
setDropped((prev) => ({
...prev,
[draggedId]: droppedId,
}));
}
}
                    
const resetGame = () => {
setDropped({}); 
setCount(0);
                    
};
                    
const handleReplay = () => {
stopApplause(); 
resetGame();
};
                    
const handleBack = () => {
stopApplause(); 
                        
navigate("/shapes");
};
                    
const isPlaced= (id) => dropped[id] === id;
                    
=======
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

>>>>>>> 0b2d8e4be0cf3c8d80bfe466e3965a96eac7b42e
  return (
    <div className="font-[coiny]">
      <img src={bg} alt="background" className="w-full" />
      <h1 className="absolute top-15 right-112 text-3xl text-white">
        Can You Find Letter {clickables[index].Answer}
      </h1>

<<<<<<< HEAD

    <div className="absolute top-0 right-0 text-white">Your Time: {count}</div>
      <div className="flex justify-evenly justify-self-center w-150  absolute top-40">
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
    </>)}

    {/*Results*/}
        {isGameFinished && count <= 10 &&(
          <div className="absolute inset-0 flex items-center h-full w-full justify-center bg-opacity-50 z-20  ">
             <motion.img
               src={ThreeStar}
               alt="Game Completed!"
               className="h-[300px]"
               initial={{ scale: 0, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
            />

            <div className="absolute bottom-[20%] ">
                <ReplayNBack/>
            </div>

     
=======
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
>>>>>>> 0b2d8e4be0cf3c8d80bfe466e3965a96eac7b42e
          </div>
        </>
      )}

<<<<<<< HEAD

    {isGameFinished && count <= 15 && count > 10 &&(
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 z-20">
             <motion.img
               src={TwoStar}
               alt="Game Completed!"
               className="h-[300px]"
               initial={{ scale: 0, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
          />
             <div className="absolute bottom-[20%] ">
                <ReplayNBack/>
            </div>
=======
      {/* Results */}
      {isGameFinished && count <= 10 && (
        <div className="absolute inset-0 flex items-center h-full w-full justify-center bg-opacity-50 z-20">
          <img src={ThreeStar} alt="Game Completed!" className="h-[300px] animate-bounce" />
          <div className="absolute bottom-[20%]">
            <ReplayNBack />
          </div>
>>>>>>> 0b2d8e4be0cf3c8d80bfe466e3965a96eac7b42e
        </div>
      )}

<<<<<<< HEAD
    {isGameFinished && count > 15 &&(
    <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 z-20">
       <motion.img
         src={OneStar}
         alt="Game Completed!"
         className="h-[300px]"
         initial={{ scale: 0, opacity: 0 }}
         animate={{ scale: 1, opacity: 1 }}
         transition={{ duration: 0.8, ease: "easeOut" }}
    />
            <div className="absolute bottom-[20%] ">
                <ReplayNBack/>
            </div>
    </div>
    )}
=======
      {isGameFinished && count <= 15 && count > 10 && (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 z-20">
          <img src={TwoStar} alt="Game Completed!" className="h-[300px] animate-bounce" />
          <div className="absolute bottom-[20%]">
            <ReplayNBack />
          </div>
        </div>
      )}
>>>>>>> 0b2d8e4be0cf3c8d80bfe466e3965a96eac7b42e

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

export default AlphabetEasyLevel1;
