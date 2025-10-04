import React, { useState,useEffect } from "react";
import { DndContext, useDraggable, useDroppable, pointerWithin } from "@dnd-kit/core";

import heptagonDroppable from "../assets/Shapes/ShapesEasy/heptagonDroppable.webp"
import heptagonDraggable from "../assets/Shapes/ShapesEasy/heptagonDraggable.webp"
import diamondDraggable from "../assets/Shapes/ShapesEasy/diamondDraggable.webp"
import diamondDropppable from "../assets/Shapes/ShapesEasy/diamondDropppable.webp"
import pentagonDroppable from  "../assets/Shapes/ShapesEasy/diamondDroppable.webp"
import pentagonDraggable from "../assets/Shapes/ShapesEasy/pentagonDraggable.webp"
import bg from "../assets/Shapes/ShapesEasy/lvl3Bg.webp"

import OneStar from "../assets/Done/OneStar.webp"; 
import TwoStar from "../assets/Done/TwoStar.webp"; 
import ThreeStar from "../assets/Done/ThreeStar.webp"; 

import Back from "../components/Back"; 
import Restart from "../components/Restart.jsx";

function Droppable({id, placedShape,shape}) {
  const { isOver, setNodeRef } = useDroppable({ id });
  const style = {
    opacity: isOver ? "0.5":"1",
    zIndex: isOver? "10":"1"
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex items-center justify-center h-[160px] w-[160px] ml-5`}
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

function ShapesEasyLevel3() {


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
        dropped["heptagon"] && dropped["diamond"] && dropped["pentagon"];
    
       const [count, setCount] = useState(0);
    
      useEffect(() => {
        if (isGameFinished) return; 
    
        const interval = setInterval(() => {
          setCount((prev) => prev + 1);
        }, 1000);
    
        return () => clearInterval(interval); 
      }, [isGameFinished]);
    
  return (
    <div className="flex h-[100vh] w-[100vw]  [&>*]:flex absolute overflow-hidden [&>*]:font-[coiny] ">
      <img src={bg} alt="background" className="absolute w-[100vw]"/>
      <DndContext onDragEnd={handleDragEnd} collisionDetection={pointerWithin}>


    <div className="h-[110px] w-[360px] justify-center z-1 absolute top-100 right-135 [&>*]:mx-5 [&>*]:font-[coiny]">             
 {!dropped ["heptagon"] && (
          <Draggable
              id = "heptagon"
              shape={<img src={heptagonDraggable} alt="a heptagon shape" className=" hover:cursor-grab h-[70px]"/>}
          />
        )}
       
         {!dropped ["diamond"] && (
          <Draggable
              id = "diamond"
              shape={<img src={diamondDraggable} alt="diamond shape in green" className="h-[70px]"/>}
          />
        )}

        {!dropped ["pentagon"] && (
          <Draggable
              id = "pentagon"
              shape={<img src={pentagonDraggable} alt="image of shape of a heart" className=" h-[70px] hover:cursor-grab"/>}
          />
        )}
    </div >
        
       
{/*Droppable*/}

<div className="absolute top-50 right-120 ">
    <Droppable
        id = "heptagon"
        shape={<img src={heptagonDroppable} alt="transparent heptagon"/>}
        placedShape={
          dropped["heptagon"] && (<Draggable
          id="heptagon"
          shape = {<img src={heptagonDraggable} alt="star shape that is transparent"/>}
          disabled={true}/>)}/>


           <Droppable
        id = "diamond"
        shape={<img src={diamondDropppable} alt="transparent oval shape" className=""/>}
        placedShape={
          dropped["diamond"] && (<Draggable
          id="diamond"
          shape = {<img src={diamondDraggable} alt="oval shape in green"/>}
          disabled={true}/>)}
        />


         <Droppable
        id = "pentagon"
        shape={<img src={pentagonDroppable} alt="image of a transparent heart"/>}
        placedShape={
          dropped["pentagon"] && (<Draggable
          id="pentagon"
          shape = {<img src={pentagonDraggable} alt="image of a transparent heart"/>}
          disabled={true}/>)}
        />
</div>
  <div className="absolute top-0 right-0 text-white">Your Time: {count}</div>
         



      {/*Results*/}
        {isGameFinished && count < 10 && count <= 20  &&(
          <div className="absolute inset-0 flex items-center h-full w-full justify-center bg-opacity-50 z-20  ">
            <img
              src={ThreeStar}
              alt="Game Completed!"
              className="h-[300px] animate-bounce"
            />

           <div  className="absolute bottom-35 gap-20 flex h-25  w-50 ">
               <div>
              <Back/>
            </div>

            <div>
               <Restart/>
            </div>

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
         <div  className="absolute bottom-35 gap-20 flex h-25  w-50 ">
               <div>
              <Back/>
            </div>

            <div>
               <Restart/>
            </div>

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
      <div  className="absolute bottom-35 gap-20 flex h-25  w-50 ">
               <div>
              <Back/>
            </div>

            <div>
               <Restart/>
            </div>

          </div>
    </div>
    )}
      </DndContext>
    </div>
  );
}

export default ShapesEasyLevel3;
