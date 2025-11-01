
import { useState,useEffect } from "react";
import { DndContext, useDraggable, useDroppable, pointerWithin } from "@dnd-kit/core";

import blueCoin from "../assets/Color/Hard/blueCoin.webp"
import indigoCoin from "../assets/Color/Hard/indigoCoin.webp"
import greenCoin from "../assets/Color/Hard/greenCoin.webp"
import orangeCoin from "../assets/Color/Hard/orangeCoin.webp"
import violetCoin from "../assets/Color/Hard/violetCoin.webp"
import redCoin from "../assets/Color/Hard/redCoin.webp"
import yellowCoin from "../assets/Color/Hard/yellowCoin.webp"

import potOfGold from "../assets/Color/Hard/potOfGold.webp"

import ReplayNBack from "../components/ReplayNBack";

import bg from "../assets/Color/Hard/bg.webp";

import OneStar from "../assets/Done/OneStar.webp"; 
import TwoStar from "../assets/Done/TwoStar.webp"; 
import ThreeStar from "../assets/Done/ThreeStar.webp"; 
import api from "../api";


import backgroundMusic from "../assets/Sounds/background.mp3";

import { motion } from "framer-motion";

import applause from "../assets/Sounds/applause.wav"
import { useWithSound } from "../components/useWithSound";
import { useNavigate } from "react-router-dom";

function Droppable({ id, placedShape, shape }) {
  const { isOver, setNodeRef } = useDroppable({ id });
  const style = {
    opacity: isOver ? "0.5" : "1",
    zIndex: isOver ? "10" : "1"
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex items-center justify-center "
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

function NumberGameMed2() {
  const navigate = useNavigate();
      const { playSound: playApplause, stopSound: stopApplause } = useWithSound(applause); 
  const [dropped, setDropped] = useState({});
  const selectedChild = JSON.parse(localStorage.getItem("selectedChild"));
  const childId = selectedChild?.id;

  const isGameFinished =
      dropped["red"] && dropped["orange"] && dropped["yellow"] && dropped["green"] 
      && dropped["blue"] && dropped["indigo"] && dropped["violet"];
  
     const [count, setCount] = useState(1);
  
<<<<<<< HEAD
    
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
                    
                    // handling browser autoplay restrictions
                    bgSound.play().catch((err) => {
                      console.log("Autoplay blocked by browser (user interaction required):", err);
                    });
                
                 
                    return () => {
                      bgSound.pause();
                      bgSound.currentTime = 0;
                    };
                  }, []); 
                
                
                  // 3. EFFECT FOR APPLAUSE SOUND 
                  useEffect(() => {
                    let soundTimeout;
                
                    if (isGameFinished) {
                      playApplause(); 
                
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
                
                  // Helper function to check if a shape has been correctly placed
                  const isPlaced= (id) => dropped[id] === id;
                
    
=======
    useEffect(() => {
      if (isGameFinished) return; 
  
      const interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
  
      return () => clearInterval(interval); 
    }, [isGameFinished]);

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

   {/*Saving*/}
  useEffect(() => {
    if (!isGameFinished || !childId) return;


    const data = {
      child_id: childId,
      game: "Alphabet",
      difficulty: "Hard",
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
    <>
      <div className="flex h-[100vh] w-[100vw] absolute overflow-hidden font-[coiny]  bg-cover bg-no-repeat" style={{backgroundImage: `url(${bg})`}}>
        <div className="absolute top-0 right-0 text-white">Your Time: {count}</div>
        <DndContext onDragEnd={handleDragEnd} collisionDetection={pointerWithin}>
          {/* Draggables */}


              {!dropped["blue"] && (
            <div className="absolute xl:top-30 xl:right-30 xl2:left-100">
              <Draggable
                id="blue"
                shape={<img src={blueCoin} alt="number 1" className="h-[80px] motion-preset-pulse-sm motion-duration-2000" />}
              />
            </div>
          )}

          {!dropped["indigo"] && (
            <div className="absolute xl:top-45 xl:right-7 xl2:left-150">
              <Draggable
                id="indigo"
                shape={<img src={indigoCoin} alt="number 4" className="h-[80px] motion-preset-pulse-sm motion-duration-2000" />}
              />
            </div>
          )}

          {!dropped["green"] && (
            <div className="absolute xl:top-60 xl:right-30 xl2:left-200">
              <Draggable
                id="green"
                shape={<img src={greenCoin} alt="number 5" className="h-[80px] motion-preset-pulse-sm motion-duration-2000" />}
              />
            </div>
          )}

           {!dropped["orange"] && (
            <div className="absolute xl:top-75 xl:right-7 xl2:left-250">
              <Draggable
                id="orange"
                shape={<img src={orangeCoin} alt="number 8" className="h-[80px] motion-preset-pulse-sm motion-duration-2000" />}
              />
            </div>
          )}

          {!dropped["violet"] && (
            <div className="absolute xl:top-90 xl:right-30 xl2:left-295">
              <Draggable
                id="violet"
                shape={<img src={violetCoin} alt="number 4" className="h-[80px] motion-preset-pulse-sm motion-duration-2000" />}
              />
            </div>

          )}
            {!dropped["red"] && (
            <div className="absolute xl:top-110 xl:right-7 xl2:left-295">
              <Draggable
                id="red"
                shape={<img src={redCoin} alt="number 4" className="h-[80px] motion-preset-pulse-sm motion-duration-2000" />}
              />
            </div>
          )}

            {!dropped["yellow"] && (
            <div className="absolute xl:top-125 xl:right-30 xl2:left-295 ">
              <Draggable
                id="yellow"
                shape={<img src={yellowCoin} alt="number 4" className="h-[80px] motion-preset-pulse-sm motion-duration-2000" />}
              />
            </div>
          )}

         
           <img src={potOfGold} alt="a pot of gold" className="absolute z-10 xl:top-95 xl:right-188 xl:h-130 xl:w-175 "/>
        




          {/* Droppables */}
          <div className="flex xl:h-120 xl:w-150 absolute xl:top-33 xl:left-0 z-0">
              <Droppable
              id="red"
              shape={<div className="h-[100vw] w-20 bg-[#7f7f7f] "></div>}
              placedShape={
                dropped["red"] && (
                  <Draggable
                    id="red"
                    shape={<div className="h-[100vw] w-20 bg-[#ff0000] "></div>}
                    disabled={true}
                  />
                )
              }
            />
                <Droppable
              id="orange"
              shape={<div className="h-[100vw] w-20 bg-[#8b8b8b]"></div>}
              placedShape={
                dropped["orange"] && (
                  <Draggable
                    id="orange"
                    shape={<div className="h-[100vw] w-20 bg-[#ffa500]"></div>}
                    disabled={true}
                  />
                )
              }
            />
             <Droppable
              id="yellow"
              shape={<div className="h-[100vw] w-20 bg-[#b2b2b2]"></div>}
              placedShape={
                dropped["yellow"] && (
                  <Draggable
                    id="yellow"
                    shape={<div className="h-[100vw] w-20 bg-[#ffff00]"></div>}
                    disabled={true}
                  />
                )
              }
            />
             <Droppable
              id="green"
              shape={<div className="h-[100vw] w-20 bg-[#626262]"></div>}
              placedShape={
                dropped["green"] && (
                  <Draggable
                    id="green"
                    shape={<div className="h-[100vw] w-20 bg-[#00ff00]"></div>}
                    disabled={true}
                  />
                )
              }
            />


             <Droppable
              id="blue"
              shape={<div className="h-[100vw] w-20 bg-[#838383]"></div>}
              placedShape={
                dropped["blue"] && (
                  <Draggable
                    id="blue"
                    shape={<div className="h-[100vw] w-20 bg-[#7dc2f0]"></div>}
                    disabled={true}
                  />
                )
              }
            />

             <Droppable
              id="indigo"
              shape={<div className="h-[100vw] w-20 bg-[#525252]"></div>}
              placedShape={
                dropped["indigo"] && (
                  <Draggable
                    id="indigo"
                    shape={<div className="h-[100vw] w-20 bg-[#3113aa]"></div>}
                    disabled={true}
                  />
                )
              }
            />
            
            <Droppable
              id="violet"
              shape={<div className="h-[100vw] w-20 bg-[#b2b2b2]"></div>}
              placedShape={
                dropped["violet"] && (
                  <Draggable
                    id="violet"
                    shape={<div className="h-[100vw] w-20 bg-[#603a96]"></div>}
                    disabled={true}
                  />
                )
              }
            />
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

{isGameFinished &&  count > 15 && count <= 20 && (
  <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 z-20">
     <motion.img
             src={twoStar}
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

export default NumberGameMed2;
