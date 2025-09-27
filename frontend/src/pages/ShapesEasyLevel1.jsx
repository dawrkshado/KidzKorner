import { useState,useEffect } from "react";
import { DndContext, useDraggable, useDroppable, pointerWithin } from "@dnd-kit/core";


import circleDroppable from "../assets/Shapes/ShapesEasy/circleDroppable.webp";
import circleDraggable from "../assets/Shapes/ShapesEasy/circleDraggable.webp";
import squareDraggable from "../assets/Shapes/ShapesEasy/squareDraggable.webp";
import squareDroppable from "../assets/Shapes/ShapesEasy/squareDroppable.webp";
import triangleDraggable from "../assets/Shapes/ShapesEasy/triangleDraggable.webp";
import triangleDroppable from "../assets/Shapes/ShapesEasy/triangleDroppable.webp";
import bg from "../assets/Shapes/ShapesEasy/lvl1Bg.webp";

// ✅ new image to show when game is finished
import successImg from "../assets/Done/Onestar.webp"; 

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
      className={`flex items-center justify-center h-[160px] w-[160px] gap-10`}
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
    dropped["circle"] && dropped["square"] && dropped["triangle"];

  const [count,setCount]=useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });


  return (
    <>
      <div className="flex h-[100vh] w-[100vw] [&>*]:flex absolute [&>*]:font-[coiny] overflow-hidden">
        <img src={bg} alt="background" className="absolute w-[100vw]" />
        <DndContext onDragEnd={handleDragEnd} collisionDetection={pointerWithin}>
          {!isGameFinished && (
            <>
              {/* Draggables */}
              <div className="flex absolute gap-6 w-[460px] h-[300px] justify-center z-10 top-100 right-110 p-4 rounded-lg">
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
              <div className="flex justify-center gap-6 absolute top-50 right-105">
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
                  <div className="absolute top-0 right-0">
                         {count}
                  </div>
                
            </>
          )}
       

    
          {isGameFinished && (
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 z-20">
              <img
                src={successImg}
                alt="Game Completed!"
                className="h-[300px] animate-bounce"
              />
            </div>
          )}
        </DndContext>
      </div>
    </>
  );
}

export default ShapesEasyLevel1;
