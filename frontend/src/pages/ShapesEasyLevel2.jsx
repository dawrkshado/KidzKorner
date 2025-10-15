import React, { useState, useEffect} from "react";
import { DndContext, useDraggable, useDroppable, pointerWithin } from "@dnd-kit/core";

import heartDroppable from "../assets/Shapes/ShapesEasy/heartDroppable.webp"
import heartDraggable from "../assets/Shapes/ShapesEasy/heartDraggable.webp"
import starDraggable from "../assets/Shapes/ShapesEasy/starDraggable.webp"
import starDroppable from "../assets/Shapes/ShapesEasy/starDroppable.webp"
import ovalDroppable from  "../assets/Shapes/ShapesEasy/ovalDroppable.webp"
import ovalDraggable from "../assets/Shapes/ShapesEasy/ovalDraggable.webp"
import bg from "../assets/Shapes/ShapesEasy/lvl2.webp"


import ReplayNBack from "../components/ReplayNBack";

import OneStar from "../assets/Done/OneStar.webp"; 
import TwoStar from "../assets/Done/TwoStar.webp"; 
import ThreeStar from "../assets/Done/ThreeStar.webp"; 

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
      className={`flex items-center justify-center h-[160px] w-[160px] ml-10`}
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

function ShapesEasyLevel2() {
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
      dropped["star"] && dropped["oval"] && dropped["heart"];
  
     const [count, setCount] = useState(0);
  
    useEffect(() => {
      if (isGameFinished) return; 
  
      const interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
  
      return () => clearInterval(interval); 
    }, [isGameFinished]);
  

  return (
    <div className="flex h-[100vh] w-[100vw]  [&>*]:flex absolute overflow-hidden [&>*]:font-[coiny]">
      <img src={bg} alt="background" className="absolute w-[100vw]"/>
      <DndContext onDragEnd={handleDragEnd} collisionDetection={pointerWithin}>

{/*Draggables*/}
    <div className="h-[110px] w-[360px] justify-center z-1 absolute bottom-40 [&>*]:ml-5  lg:left-10">             
 {!dropped ["star"] && (
          <Draggable
              id = "star"
              shape={<img src={starDraggable} alt="a star shape" className=" hover:cursor-grab h-[70px]"/>}
          />
        )}
       

         {!dropped ["oval"] && (
          <Draggable
              id = "oval"
              shape={<img src={ovalDraggable} alt="oval shape in green" className="h-[70px] hover:cursor-grab"/>}
          />
        )}

        {!dropped ["heart"] && (
          <Draggable
              id = "heart"
              shape={<img src={heartDraggable} alt="image of shape of a heart" className=" h-[70px] hover:cursor-grab"/>}
          />
        )}
    </div >
        
       
{/*Droppable*/}
<div className="absolute left-90 top-50 lg:left-110">
    <Droppable
        id = "star"
        shape={<img src={starDroppable}/>}
        placedShape={
          dropped["star"] && (<Draggable
          id="star"
          shape = {<img src={starDraggable} alt="star shape that is transparent"/>}
          disabled={true}/>)}/>


           <Droppable
        id = "oval"
        shape={<img src={ovalDroppable} alt="transparent oval shape" className=""/>}
        placedShape={
          dropped["oval"] && (<Draggable
          id="oval"
          shape = {<img src={ovalDraggable} alt="oval shape in green"/>}
          disabled={true}/>)}
        />


         <Droppable
        id = "heart"
        shape={<img src={heartDroppable} alt="image of a transparent heart"/>}
        placedShape={
          dropped["heart"] && (<Draggable
          id="heart"
          shape = {<img src={heartDraggable} alt="image of a transparent heart"/>}
          disabled={true}/>)}
        /> 
        </div>

   <div className="absolute top-0 right-0 text-white">Your Time: {count}</div>
      
                  
        
        {/*Results*/}
        {isGameFinished && count <= 10 &&(
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

    {isGameFinished && count <= 15 && count > 10 &&(
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

    {isGameFinished && count > 15 &&(
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
  );
}

export default ShapesEasyLevel2;
