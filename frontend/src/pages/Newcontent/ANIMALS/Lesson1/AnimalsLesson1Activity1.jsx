import { useState,useEffect } from "react";
import { DndContext, useDraggable, useDroppable, pointerWithin } from "@dnd-kit/core";

import BG from "../../../../assets/Animals/Lesson1/Activity1Bg.webp"
import Quack from "../../../../assets/Animals/Lesson1/Quack.webp"
import Oink from "../../../../assets/Animals/Lesson1/Oink.webp"
import Moo from "../../../../assets/Animals/Lesson1/Moo.webp"
import Meow from "../../../../assets/Animals/Lesson1/Meow.webp"
import Arf from "../../../../assets/Animals/Lesson1/Arf.webp"


import Pig from "../../../../assets/Animals/Lesson1/Pig.webp"
import PigDone from "../../../../assets/Animals/Lesson1/PigDone.webp"
import Cat from "../../../../assets/Animals/Lesson1/Cat.webp"
import CatDone from "../../../../assets/Animals/Lesson1/CatDone.webp"
import Cow from "../../../../assets/Animals/Lesson1/Cow.webp"
import CowDone from "../../../../assets/Animals/Lesson1/CowDone.webp"
import Dog from "../../../../assets/Animals/Lesson1/Dog.webp"
import DogDone from "../../../../assets/Animals/Lesson1/DogDone.webp"
import Duck from "../../../../assets/Animals/Lesson1/Duck.webp"
import DuckDone from "../../../../assets/Animals/Lesson1/DuckDone.webp"

import OneStar from "../../../../assets/Done/OneStar.webp"; 
import TwoStar from "../../../../assets/Done/TwoStar.webp"; 
import ThreeStar from "../../../../assets/Done/ThreeStar.webp"; 

import ReplayNBack from "../../../../components/ReplayNBack";
import backgroundMusic from "../../../../assets/Sounds/background.mp3";

import { motion } from "framer-motion";

import applause from "../../../../assets/Sounds/applause.wav"
import { useWithSound } from "../../../../components/useWithSound";
import { useNavigate } from "react-router-dom";

function Droppable({ id, placedShape, shape }) {
  const { isOver, setNodeRef } = useDroppable({ id });
  const style = {
    opacity: isOver ? "0.5" : "1",
    zIndex: isOver ? "10" : "1",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex items-center justify-center h-100 w-100`}
    >
      {placedShape ? placedShape : shape}
    </div>
  );
}

function Draggable({ id, disabled = false, shape }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    disabled,
  });

  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...(!disabled ? attributes : {})}
      {...(!disabled ? listeners : {})}
    >
      {shape}
    </div>
  );
}

const PROGRESS_KEY = 'alphabetMediumProgress'; 

function saveProgress(level) {
  const progress = JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {
    level1: false,
    level2: false,
  };
  progress[level] = true;
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}
function AnimalsLessonActivity1() {
  const navigate = useNavigate();
  const { playSound: playApplause, stopSound: stopApplause } = useWithSound(applause); 
  const [dropped, setDropped] = useState({});

  function handleDragEnd(event) {
    if (event.over) {
      const draggedId = event.active.id;
      const droppedId = event.over.id;

      if (draggedId === droppedId) {
        setDropped((prev) => ({
          ...prev,
          [draggedId]: droppedId,
        }));
      }
    }
  }


  const isGameFinished =
    dropped["arf"] && dropped["meow"] && dropped["moo"] && dropped["oink"] && dropped["quack"];

   const [count, setCount] = useState(0);

    useEffect(() => {
if (isGameFinished) return; 
                               
const interval = setInterval(() => {
setCount((prev) => prev + 1);
}, 1000);
                               
return () => clearInterval(interval); 
}, [isGameFinished]);
                         
                       
                     
const [index] = useState(0);
                     
const logic = (choice) => {
if (choice === clickables[index].Answer) {
setGameFinished(true);
} else {
alert("wrong!");
}
};
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

  return (
    <>
      <div className="flex h-[100vh] w-[100vw] [&>*]:flex absolute font-[coiny] overflow-hidden bg-cover bg-no-repeat" style={{backgroundImage:`url(${BG})`}} >
    <div className="absolute top-0 right-0 text-white">Your Time: {count}</div>
                
         <DndContext onDragEnd={handleDragEnd} collisionDetection={pointerWithin}>
         
      

              {/* Droppables */}
              <div className="flex absolute top-60 items-center justify-center w-[100vw] h-[40vw] ">
                <Droppable
                          id="meow"
                          shape={<img src={Cat} alt="Where you will drop the arf sound" className="w-[60%] h-[60%] object-contain" />}
                          placedShape={
                            dropped["meow"] && (
                              <Draggable
                                id="meow"
                                shape={<img src={CatDone} alt="letter n" className=" h-70" />}
                                disabled={true}
                              />
                            )
                          }
                        />
                <Droppable
                  id="oink"
                
                  shape={<img src={Pig} alt="Where you will drop the smaller letter"   className="w-[60%] h-[60%] object-contain"/>}
                  placedShape={
                    dropped["oink"] && (
                      <Draggable
                        id="oink"
                        shape={<img src={PigDone} alt="letter n"  className="h-70"/>}
                        disabled={true}
                      />
                    )
                  }
                />
                <Droppable
                  id="moo"
                  shape={<img src={Cow} alt="Where you will drop the smaller letter"   className="w-[60%] h-[60%] object-contain"/>}
                  placedShape={
                    dropped["moo"] && (
                      <Draggable
                        id="moo"
                        shape={<img src={CowDone} alt="Letter O" className="h-70 " />}
                        disabled={true}
                      />
                    )
                  }
                />

                <Droppable
                  id="quack"
                  shape={<img src={Duck} alt="Where you will drop the smaller letter"   className="w-[60%] h-[60%] object-contain"/>}
                  placedShape={
                    dropped["quack"] && (
                      <Draggable
                        id="quack"
                        shape={<img src={DuckDone} alt="Letter P" className="h-70"/>}
                        disabled={true}
                      />
                    )
                  }
                />
                <Droppable
                  id="arf"
                  shape={<img src={Dog} alt="Where you will drop the smaller letter"   className="w-[60%] h-[60%] object-contain"/>}
                  placedShape={
                    dropped["arf"] && (
                      <Draggable
                        id="arf"
                        shape={<img src={DogDone} alt="Small Letter Q" className="h-70" />}
                        disabled={true}
                      />
                    )
                  }
                />
                
                
              </div>


               {/* Draggables */}
              <div className="flex absolute  gap-30 mt-10 w-[100vw] h-[300px] justify-center z-10 top-70 lg:top-40 p-4 rounded-lg ">

                {!dropped["quack"] && (
                  <Draggable
                    id="quack"
                    shape={
                      <img
                        src={Quack}
                        alt="Quack"
                        className="h-[80px]"
                      />
                    }
                  />
                )}

                {!dropped["meow"] && (
                  <Draggable
                    id="meow"
                    shape={
                      <img
                        src={Meow}
                        alt="Meow"
                        className="h-[80px]"
                      />
                    }
                  />
                )}

                    {!dropped["moo"] && (
                  <Draggable
                    id="moo"
                    shape={
                      <img
                        src={Moo}
                        alt="letter M"
                        className="h-[80px]"
                      />
                    }
                  />
                )}
                 

                {!dropped["oink"] && (
                  <Draggable
                    id="oink"
                    shape={
                      <img
                        src={Oink}
                        alt="Oink bubble"
                        className="h-[80px]"
                      />
                    }
                  />
                )}
                 {!dropped["arf"] && (
                  <Draggable
                    id="arf"
                    shape={
                      <img
                        src={Arf}
                        alt="arf"
                        className="h-[80px]"
                      />
                    }
                  />
                )}
              </div>  
              
                
              


  
          
   {/*Results*/}
{isGameFinished && count <= 15 &&(
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
  </div>
)}

{isGameFinished && count <= 20 && count > 15 &&(
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
  </div>
)}

{isGameFinished && count > 20 &&(
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
        </DndContext>
      </div>
    </>
  );
}

export default AnimalsLessonActivity1;
