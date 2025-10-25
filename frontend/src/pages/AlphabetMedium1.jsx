import { useState,useEffect } from "react";
import { DndContext, useDraggable, useDroppable, pointerWithin } from "@dnd-kit/core";

import Mdraggable from "../assets/Alphabets/Medium/draggableM.webp";
import Ndraggable from "../assets/Alphabets/Medium/draggableN.webp";
import Odraggable from "../assets/Alphabets/Medium/draggableO.webp";
import Pdraggable from "../assets/Alphabets/Medium/draggableP.webp";
import Qdraggable from "../assets/Alphabets/Medium/draggableQ.webp";
import droppableImage from "../assets/Alphabets/Medium/droppables.webp";
import bg from "../assets/Alphabets/Medium/bg1.webp";


import OneStar from "../assets/Done/OneStar.webp"; 
import TwoStar from "../assets/Done/TwoStar.webp"; 
import ThreeStar from "../assets/Done/ThreeStar.webp"; 

import ReplayNBack from "../components/ReplayNBack";
import api from "../api";


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
      className={`flex items-center justify-center h-[120px] w-[120px]`}
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

function AlphabetMedium1() {

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

  const [dropped, setDropped] = useState({});
  const selectedChild = JSON.parse(localStorage.getItem("selectedChild"));
  const childId = selectedChild?.id;
  const isGameFinished =
    dropped["m"] && dropped["n"] && dropped["o"] && dropped["p"] && dropped["q"];

   const [count, setCount] = useState(1);

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
      difficulty: "Medium",
      level: 1,
      time: count,
    };

    api.post("/api/save_progress/", data)
      .then((res) => console.log("Progress saved:", res.data))
      .catch((err) => console.error("Error saving progress:", err));
  }, [isGameFinished]);


  return (
    <>
      <div className="flex h-[100vh] w-[100vw] [&>*]:flex absolute font-[coiny] overflow-hidden">
        <img src={bg} alt="background" className="absolute w-[100vw]" />
    <div className="absolute top-0 right-0 text-white">Your Time: {count}</div>
                
         <DndContext onDragEnd={handleDragEnd} collisionDetection={pointerWithin}>
         
         
      
              {/* Draggables */}
              <div className="flex absolute  gap-30 mt-10 w-[100vw] h-[300px] justify-center z-10 top-100 lg:top-115 p-4 rounded-lg ">


                {!dropped["n"] && (
                  <Draggable
                    id="n"
                    shape={
                      <img
                        src={Ndraggable}
                        alt="letter N"
                        className="h-[80px]"
                      />
                    }
                  />
                )}

                {!dropped["o"] && (
                  <Draggable
                    id="o"
                    shape={
                      <img
                        src={Odraggable}
                        alt="letter O"
                        className="h-[80px]"
                      />
                    }
                  />
                )}

                    {!dropped["m"] && (
                  <Draggable
                    id="m"
                    shape={
                      <img
                        src={Mdraggable}
                        alt="letter M"
                        className="h-[80px]"
                      />
                    }
                  />
                )}

                 

                {!dropped["q"] && (
                  <Draggable
                    id="q"
                    shape={
                      <img
                        src={Qdraggable}
                        alt="letter q"
                        className="h-[80px]"
                      />
                    }
                  />
                )}

                {!dropped["p"] && (
                  <Draggable
                    id="p"
                    shape={
                      <img
                        src={Pdraggable}
                        alt="letter p"
                        className="h-[80px]"
                      />
                    }
                  />
                )}
              </div>
              

              {/* Droppables */}
              <div className="flex justify-center gap-30 absolute top-70 left-40 lg:top-85 lg:left-58">
                <Droppable
                  id="m"
                  shape={<img src={droppableImage} alt="Where you will drop the smaller letter" />}
                  placedShape={
                    dropped["m"] && (
                      <Draggable
                        id="m"
                        shape={<img src={Mdraggable} alt="letter m" className="h-20" />}
                        disabled={true}
                      />
                    )
                  }
                />

                <Droppable
                  id="n"
                  shape={<img src={droppableImage} alt="Where you will drop the smaller letter" />}
                  placedShape={
                    dropped["n"] && (
                      <Draggable
                        id="n"
                        shape={<img src={Ndraggable} alt="letter n"  className="h-20"/>}
                        disabled={true}
                      />
                    )
                  }
                />
                <Droppable
                  id="o"
                  shape={<img src={droppableImage} alt="Where you will drop the smaller letter" />}
                  placedShape={
                    dropped["o"] && (
                      <Draggable
                        id="o"
                        shape={<img src={Odraggable} alt="Letter O" className="h-20" />}
                        disabled={true}
                      />
                    )
                  }
                />

                <Droppable
                  id="p"
                  shape={<img src={droppableImage} alt="Where you will drop the smaller letter" />}
                  placedShape={
                    dropped["p"] && (
                      <Draggable
                        id="p"
                        shape={<img src={Pdraggable} alt="Letter P" className="h-20"/>}
                        disabled={true}
                      />
                    )
                  }
                />
                <Droppable
                  id="q"
                  shape={<img src={droppableImage} alt="Where you will drop the smaller letter" />}
                  placedShape={
                    dropped["q"] && (
                      <Draggable
                        id="q"
                        shape={<img src={Qdraggable} alt="Small Letter Q" className="h-20" />}
                        disabled={true}
                      />
                    )
                  }
                />
                
                
              </div>


       
          
{/*Results*/}
{isGameFinished && count <= 15 &&(
  <div className="absolute inset-0 flex items-center h-full w-full justify-center bg-opacity-50 z-20  ">
      <img src={ThreeStar}
      alt="Game Completed!"
      className="h-[300px] animate-bounce"
  />

      <div className="absolute bottom-[20%] ">
        <ReplayNBack/>
      </div>


  </div>
)}

{isGameFinished && count <= 20 && count > 15 &&(
  <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 z-20">
      <img
      src={TwoStar}
      alt="Game Completed!"
      className="h-[300px] animate-bounce"/>
      <div className="absolute bottom-[20%] ">
        <ReplayNBack/>
      </div>
  </div>
)}

{isGameFinished && count > 25 &&(
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
        </DndContext>
      </div>
    </>
  );
}

export default AlphabetMedium1;
