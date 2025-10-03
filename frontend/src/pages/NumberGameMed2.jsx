import { useState } from "react";
import { DndContext, useDraggable, useDroppable, pointerWithin } from "@dnd-kit/core";

import draggableNumber1 from "../assets/Number/Medium/number1.webp"
import draggableNumber2 from "../assets/Number/Medium/number2.webp"
import draggableNumber5 from "../assets/Number/Medium/number5.webp"
import draggableNumber8 from "../assets/Number/Medium/number8.webp"
import draggableNumber10 from "../assets/Number/Medium/number10.webp"

import droppableFish1 from "../assets/Number/Medium/mediumfishDroppable.webp"
import droppableFish2 from "../assets/Number/Medium/mediumfishDroppable2.webp"

import droppedFish1 from "../assets/Number/Medium/mediumFishDropDone2.webp"
import droppedFish2 from "../assets/Number/Medium/mediumFishDropDone1.webp"

import bg from "../assets/Number/Medium/bg2.webp";

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

function NumberGameMed2() {
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

  return (
    <>
      <div className="flex h-[100vh] w-[100vw] absolute overflow-hidden">
        
        <img src={bg} alt="background" className="absolute w-[100vw] h-[100vh]" />
        <DndContext onDragEnd={handleDragEnd} collisionDetection={pointerWithin}>
          {/* Draggables */}

          <div className="z-1">
              {!dropped["one"] && (
            <div className="absolute top-10 left-[320px]">
              <Draggable
                id="one"
                shape={<img src={draggableNumber1} alt="number 1" className="h-[60px] motion-preset-pulse-sm motion-duration-2000" />}
              />
            </div>
          )}

          {!dropped["two"] && (
            <div className="absolute top-10 left-[480px] ">
              <Draggable
                id="two"
                shape={<img src={draggableNumber2} alt="number 4" className="h-[60px] motion-preset-pulse-sm motion-duration-2000" />}
              />
            </div>
          )}

          {!dropped["five"] && (
            <div className="absolute top-12 left-[650px]">
              <Draggable
                id="five"
                shape={<img src={draggableNumber5} alt="number 5" className="h-[60px] motion-preset-pulse-sm motion-duration-2000" />}
              />
            </div>
          )}

           {!dropped["eight"] && (
            <div className="absolute top-10 right-[400px]">
              <Draggable
                id="eight"
                shape={<img src={draggableNumber8} alt="number 8" className="h-[60px] motion-preset-pulse-sm motion-duration-2000" />}
              />
            </div>
          )}

          {!dropped["ten"] && (
            <div className="absolute top-10 right-[200px] ">
              <Draggable
                id="ten"
                shape={<img src={draggableNumber10} alt="number 4" className="h-[60px] motion-preset-pulse-sm motion-duration-2000" />}
              />
            </div>
          )}
          </div>
        

          {/* Droppables */}
          <div className="flex h-120 w-250 gap-6 absolute top-25 right-25 z-0">


            <div className="absolute top-35 left-100 motion-preset-pulse-sm motion-duration-2000">
              <Droppable
              id="eight"
              shape={<img src={droppableFish2} alt="fish image" />}
              placedShape={
                dropped["eight"] && (
                  <Draggable
                    id="eight"
                    shape={<img src={droppedFish1} alt="fish with number 2" />}
                    disabled={true}
                  />
                )
              }
            />
            </div>
            
              <div className="absolute left-220 top-35 motion-preset-pulse-sm motion-duration-2000">
                <Droppable
              id="ten"
              shape={<img src={droppableFish1} alt="fish image" />}
              placedShape={
                dropped["ten"] && (
                  <Draggable
                    id="ten"
                    shape={<img src={droppedFish2} alt="fish with number 4" />}
                    disabled={true}
                  />
                )
              }
            />
              </div>
            
            
          </div>
        </DndContext>
      </div>
    </>
  );
}

export default NumberGameMed2;
