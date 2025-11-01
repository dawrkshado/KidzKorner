import { useState, useEffect, useMemo } from "react";
import { DndContext, useDraggable, useDroppable, pointerWithin } from "@dnd-kit/core";


import circleDroppable from "../assets/Shapes/ShapesEasy/circleDroppable.webp";
import circleDraggable from "../assets/Shapes/ShapesEasy/circleDraggable.webp";
import squareDraggable from "../assets/Shapes/ShapesEasy/squareDraggable.webp";
import squareDroppable from "../assets/Shapes/ShapesEasy/squareDroppable.webp";
import triangleDraggable from "../assets/Shapes/ShapesEasy/triangleDraggable.webp";
import triangleDroppable from "../assets/Shapes/ShapesEasy/triangleDroppable.webp";
import api from "../api";

import bg from "../assets/Shapes/ShapesEasy/lvl1Bg.webp";

import ReplayNBack from "../components/ReplayNBack";

import backgroundMusic from "../assets/Sounds/background.mp3";

import OneStar from "../assets/Done/OneStar.webp";
import TwoStar from "../assets/Done/TwoStar.webp";
import ThreeStar from "../assets/Done/ThreeStar.webp";

import { motion } from "framer-motion";


import applause from "../assets/Sounds/applause.wav"
import { useWithSound } from "../components/useWithSound";
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
      className="flex items-center justify-center h-[160px] w-[160px] gap-10"
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
function saveProgress(level) {
  const progress = JSON.parse(localStorage.getItem("shapesEasyProgress")) || {
    level1: false,
    level2: false,
    level3: false,
  };
  progress[level] = true;
  localStorage.setItem("shapesEasyProgress", JSON.stringify(progress));
}

function ShapesEasyLevel1() {
<<<<<<< HEAD
  const navigate = useNavigate();
  const { playSound: playApplause, stopSound: stopApplause } = useWithSound(applause); 

  

=======
>>>>>>> 0b2d8e4be0cf3c8d80bfe466e3965a96eac7b42e
  const [dropped, setDropped] = useState({});
  const [count, setCount] = useState(0);

  const isGameFinished = 
    dropped["circle"] === "circle" && 
    dropped["square"] === "square" && 
    dropped["triangle"] === "triangle";


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

<<<<<<< HEAD
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

  // Helper function to check if a shape has been correctly placed
  const isPlaced= (id) => dropped[id] === id;
=======
  const selectedChild = JSON.parse(localStorage.getItem("selectedChild"));
  const childId = selectedChild?.id;

    useEffect(() => {
    if (!isGameFinished || !childId) return;


    const data = {
      child_id: childId,
      game: "Shape",
      difficulty: "Easy",
      level: 1,
      time: count,
    };


    api.post("/api/save_progress/", data)
      .then((res) => console.log("Progress saved:", res.data))
      .catch((err) => console.error("Error saving progress:", err));
  }, [isGameFinished]);
>>>>>>> 0b2d8e4be0cf3c8d80bfe466e3965a96eac7b42e

  return (
    <>
      <div className="flex h-[100vh] w-[100vw] [&>*]:flex absolute [&>*]:font-[coiny] overflow-hidden">
        <img src={bg} alt="background" className="absolute w-[100vw]" />

        

        <DndContext onDragEnd={handleDragEnd} collisionDetection={pointerWithin}>
          <>
            {/* Draggables */}
            <div className="absolute gap-6 w-[460px] justify-center z-10 top-100 right-110 xl2:right-130 p-4 rounded-lg">
              {!dropped["circle"] && (
                <Draggable
                  id="circle"
                  shape={
                    <img
                      src={circleDraggable}
                      alt="circle shape"
                      className="h-[80px]"
                    />
                  }
                />
              )}

              {!dropped["square"] && (
                <Draggable
                  id="square"
                  shape={
                    <img
                      src={squareDraggable}
                      alt="square shape"
                      className="h-[80px]"
                    />
                  }
                />
              )}

              {!dropped["triangle"] && (
                <Draggable
                  id="triangle"
                  shape={
                    <img
                      src={triangleDraggable}
                      alt="triangle shape"
                      className="h-[80px]"
                    />
                  }
                />
              )}
            </div>

            {/* Droppables */}
            <div className="justify-center gap-6 absolute top-50 right-105 xl2:right-120">
              <Droppable
                id="circle"
                shape={<img src={circleDroppable} alt="transparent circle" />}
                placedShape={
                  dropped["circle"] && (
                    <Draggable
                      id="circle"
                      shape={<img src={circleDraggable} alt="circle shape" />}
                      disabled={true}
                    />
                  )
                }
              />

              <Droppable
                id="square"
                shape={<img src={squareDroppable} alt="transparent square" />}
                placedShape={
                  dropped["square"] && (
                    <Draggable
                      id="square"
                      shape={<img src={squareDraggable} alt="square shape" />}
                      disabled={true}
                    />
                  )
                }
              />

              <Droppable
                id="triangle"
                shape={<img src={triangleDroppable} alt="transparent triangle" />}
                placedShape={
                  dropped["triangle"] && (
                    <Draggable
                      id="triangle"
                      shape={<img src={triangleDraggable} alt="triangle shape" />}
                      disabled={true}
                    />
                  )
                }
              />
            </div>

            <div className="absolute top-0 right-0 text-white">
              Your Time: {count}
            </div>
          </>
  

       
                {/*Results*/}
        {isGameFinished && count <= 10 && (
          <div className="absolute inset-0 flex items-center h-full w-full justify-center bg-opacity-50 z-20">
            
            <motion.img
              src={ThreeStar}
              alt="Game Completed!"
              className="h-[300px]"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
             <div className="absolute bottom-[20%]">
             <ReplayNBack />
              </div>
          </div>
        )}

    {isGameFinished && count <= 15 && count > 10 && (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 z-20">
             
            <motion.img
              src={TwoStar}
              alt="Game Completed!"
              className="h-[300px]"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
             <div className="absolute bottom-[20%]">
              <ReplayNBack /></div>
          </div>
        )}

{isGameFinished && count > 15 && (
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

export default ShapesEasyLevel1;

