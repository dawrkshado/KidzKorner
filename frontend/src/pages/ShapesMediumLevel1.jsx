import bg from "../assets/Shapes/ShapesMedium/level1/bg.webp";
import { useState,useEffect } from "react";
import { DndContext, useDraggable, useDroppable, pointerWithin } from "@dnd-kit/core";


import circleDroppable from "../assets/Shapes/ShapesMedium/level1/droppableCircle.webp";
import circleDraggable from "../assets/Shapes/ShapesMedium/level1/circleDraggable.webp";
import squareDraggable from "../assets/Shapes/ShapesMedium/level1/draggableSquare.webp";
import squareDroppable from "../assets/Shapes/ShapesMedium/level1/droppableSquare.webp";
import triangleDraggable from "../assets/Shapes/ShapesMedium/level1/draggableTriangle.webp";
import triangleDroppable from "../assets/Shapes/ShapesMedium/level1/droppableTriangle.webp";


import ReplayNBack from "../components/ReplayNBack.jsx";

import OneStar from "../assets/Done/OneStar.webp"; 
import TwoStar from "../assets/Done/TwoStar.webp"; 
import ThreeStar from "../assets/Done/ThreeStar.webp"; 

import Bone from "../assets/Shapes/ShapesMedium/level1/bone.webp"


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
      className={`flex items-center justify-center h-[300px] w-[300px] gap-10 `}
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

function ShapesMediumLevel1() {
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
     
      <div className="flex h-[100vh] w-[100vw] [&>*]:flex absolute [&>*]:font-[coiny] overflow-hidden ">
       <img src={bg} alt="background" className="absolute w-[100vw] h-[100vh] z-0" />
         <DndContext onDragEnd={handleDragEnd} collisionDetection={pointerWithin}>
            <>
          <img src={Bone} alt="image of a bone for design" className="absolute h-15 bottom-50 z-10 left-20" />
              {/* Draggables */}
              <div className="absolute gap-6 w-[460px] justify-center z-10 top-55 xl:right-10 xl2:right-130 p-4 rounded-lg">
                {!dropped["circle"] && (
                  <Draggable
                    id="circle"
                    shape={
                      <img
                        src={circleDraggable}
                        alt="circle shape"
                        className="h-[110px]"
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
                        className="h-[110px]"
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
                        className="h-[110px]"
                      />
                    }
                  />
                )}
              </div>

              {/* Droppables */}
                <div className="absolute xl:top-0 xl:h-fit xl:right-28 ">
                  <Droppable
                  id="circle"
                  shape={<img src={circleDroppable} alt="transparent circle" className="xl:h-33"/>}
                  placedShape={
                    dropped["circle"] && (
                      <Draggable
                        id="circle"
                        shape={<img src={circleDraggable} alt="circle shape" className="xl:h-35"/>}
                        disabled={true}
                      />
                    )
                  }
                />
                </div>

                <div className="absolute xl:bottom-8 xl:left-7  h-60 w-60 ">
                  <Droppable
                  id="square"
                  shape={<img src={squareDroppable} alt="transparent square" className="h-60 w-200" />}
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
                </div>

                <div className="absolute xl:bottom-50 bg">
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
               
      
                <div className="absolute top-0 right-0 text-white">Your Time: {count}</div>
                
            </>

       
         {/*Results*/}
        {isGameFinished && count <= 20 && count > 20 &&(
          <div className="absolute inset-0 flex items-center h-full w-full justify-center bg-opacity-50 z-20  ">
            <img
              src={ThreeStar}
              alt="Game Completed!"
              className="h-[300px] animate-bounce"
            />
            <div className="absolute bottom-[20%] ">
              <ReplayNBack/>
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
            <div className="absolute bottom-[20%] ">
              <ReplayNBack/>
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

export default ShapesMediumLevel1;
