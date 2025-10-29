import { useState, useEffect } from "react";
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

import OneStar from "../assets/Done/OneStar.webp";
import TwoStar from "../assets/Done/TwoStar.webp";
import ThreeStar from "../assets/Done/ThreeStar.webp";

import { motion } from "framer-motion";


import applause from "../assets/Sounds/applause.wav"
import { useWithSound } from "../components/useWithSound";


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

function ShapesEasyLevel1() {
  const [dropped, setDropped] = useState({});
  const [count, setCount] = useState(0);
  

  const isGameFinished =
    dropped["circle"] && dropped["square"] && dropped["triangle"];

  function handleDragEnd(event) {
    if (event.over) {
      const draggedId = event.active.id;
      const droppedId = event.over.id;

      setDropped((prev) => ({
        ...prev,
        [draggedId]: droppedId,
      }));
    }
  }
{/*Sound Effect*/}
 const { playSound } = useWithSound(applause);

  useEffect(() => {
    if (isGameFinished) {
      playSound();
    }
  }, [isGameFinished]);
  {/*Sound Effect*/}

  useEffect(() => {
    if (isGameFinished) return;

    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isGameFinished]);

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
        </DndContext>

        {/* Results */}
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
              <ReplayNBack /></div>
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
    </>
  );
}

export default ShapesEasyLevel1;
