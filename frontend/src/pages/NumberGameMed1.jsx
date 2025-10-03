import { useState,useEffect } from "react";
import { DndContext, useDraggable, useDroppable, pointerWithin } from "@dnd-kit/core";

import draggableNumber2 from "../assets/Number/Medium/draggableNumber2.webp"
import draggableNumber4 from "../assets/Number/Medium/draggableNumber4.webp"
import draggableNumber6 from "../assets/Number/Medium/draggableNumber6.webp"

import droppableFish1 from "../assets/Number/Medium/droppableFish1.webp"
import droppableFish2 from "../assets/Number/Medium/droppableFish2.webp"

import droppedFish1 from "../assets/Number/Medium/droppedFish1.webp"
import droppedFish2 from "../assets/Number/Medium/droppedFish2.webp"

import bg from "../assets/Number/Medium/bg.webp";

import OneStar from "../assets/Done/OneStar.webp"; 
import TwoStar from "../assets/Done/TwoStar.webp"; 
import ThreeStar from "../assets/Done/ThreeStar.webp"; 

import Back from "../components/Back";

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

function NumberGameMed1() {
  const [dropped, setDropped] = useState({});

  function refreshPage (){

     window.location.reload();
  }

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
    dropped["two"] && dropped["four"];

   const [count, setCount] = useState(0);

  useEffect(() => {
    if (isGameFinished) return; 

    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); 
  }, [isGameFinished]);


  return (
    <>
      <div className="flex h-[100vh] w-[100vw] absolute font-[coiny] text-white">
        <img src={bg} alt="background" className="absolute w-[100vw] h-[100vh]" />
         <div className="absolute top-0 right-0">Your Time: {count}</div>
        <DndContext onDragEnd={handleDragEnd} collisionDetection={pointerWithin}>
          {/* Draggables */}

          <div className="z-1">
              {!dropped["two"] && (
            <div className="absolute bottom-5 left-[530px]">
              <Draggable
                id="two"
                shape={<img src={draggableNumber2} alt="number 2" className="h-[80px] motion-preset-pulse-sm motion-duration-2000" />}
              />
            </div>
          )}

          {!dropped["four"] && (
            <div className="absolute bottom-5 left-[670px] ">
              <Draggable
                id="four"
                shape={<img src={draggableNumber4} alt="number 4" className="h-[80px] motion-preset-pulse-sm motion-duration-2000" />}
              />
            </div>
          )}

          {!dropped["six"] && (
            <div className="absolute bottom-5 left-[825px]">
              <Draggable
                id="six"
                shape={<img src={draggableNumber6} alt="number 6" className="h-[80px] motion-preset-pulse-sm motion-duration-2000" />}
              />
            </div>
          )}
          </div>
      

          {/* Droppables */}
          <div className="flex h-120 w-250 gap-6 absolute top-25 right-25 z-0">
            <div className="absolute top-55 left-60 motion-preset-pulse-sm motion-duration-2000">
              <Droppable
              id="two"
              shape={<img src={droppableFish1} alt="fish image" />}
              placedShape={
                dropped["two"] && (
                  <Draggable
                    id="two"
                    shape={<img src={droppedFish1} alt="fish with number 2" />}
                    disabled={true}
                  />
                )
              }
            />
            </div>

              <div className="absolute left-170 motion-preset-pulse-sm motion-duration-2000">
                <Droppable
              id="four"
              shape={<img src={droppableFish2} alt="fish image" />}
              placedShape={
                dropped["four"] && (
                  <Draggable
                    id="four"
                    shape={<img src={droppedFish2} alt="fish with number 4" />}
                    disabled={true}
                  />
                )
              }
            />
              </div>
          </div>
        </DndContext>

        {/*Results*/}
        {isGameFinished && count < 10 && count <= 20  &&(
          <div className="absolute inset-0 flex items-center h-full w-full justify-center bg-opacity-50 z-20  ">
            <img
              src={ThreeStar}
              alt="Game Completed!"
              className="h-[300px] animate-bounce"
            />

            <div className="absolute bottom-35 gap-20 flex h-25  w-50 ">
              <Back/>
              <button className="absolute bg-amber-200 h-10 w-25 justify- right-0" onClick={refreshPage}>Restart</button>
            </div>

     
          </div>
        )}

    {isGameFinished && count >= 20 && count <= 30 &&(
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 z-20">
          <img
            src={TwoStar}
            alt="Game Completed!"
            className="h-[300px] animate-bounce"
          />
          <div className="absolute bottom-35 gap-20 flex h-25  w-50 ">
              <Back/>
              <button className="absolute bg-amber-200 h-10 w-25 justify- right-0" onClick={refreshPage}>Restart</button>
            </div>
        </div>
    )}

    {isGameFinished && count > 30 &&(
    <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 z-20">
    <img
      src={OneStar}
      alt="Game Completed!"
      className="h-[300px] animate-bounce"
    />
      <div className="absolute bottom-35 gap-20 flex h-25  w-50 ">
              <Back/>
              <button className="absolute bg-amber-200 h-10 w-25 justify- right-0" onClick={refreshPage}>Restart</button>
            </div>
    </div>
    )}

      </div>
    </>
  );
}

export default NumberGameMed1;
