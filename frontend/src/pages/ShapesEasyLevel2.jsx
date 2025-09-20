import React, { useState } from "react";
import { DndContext, useDraggable, useDroppable, pointerWithin } from "@dnd-kit/core";

import heartDroppable from "../assets/Shapes/ShapesEasy/heartDroppable.webp"
import heartDraggable from "../assets/Shapes/ShapesEasy/heartDraggable.webp"
import starDraggable from "../assets/Shapes/ShapesEasy/starDraggable.webp"
import starDroppable from "../assets/Shapes/ShapesEasy/starDroppable.webp"
import ovalDroppable from  "../assets/Shapes/ShapesEasy/ovalDroppable.webp"
import ovalDraggable from "../assets/Shapes/ShapesEasy/ovalDraggable.webp"
import bg from "../assets/Shapes/ShapesEasy/lvl2.webp"
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

  return (
    <div className="flex h-[100vh] w-[100vw]  [&>*]:flex absolute overflow-hidden">
      <img src={bg} alt="background" className="absolute w-[100vw]"/>
      <DndContext onDragEnd={handleDragEnd} collisionDetection={pointerWithin}>


    <div className="h-[110px] w-[360px] justify-center z-1 absolute bottom-40 [&>*]:ml-5">             
 {!dropped ["star"] && (
          <Draggable
              id = "star"
              shape={<img src={starDraggable} alt="a star shape" className=" hover:cursor-grab h-[70px]"/>}
          />
        )}
       

         {!dropped ["oval"] && (
          <Draggable
              id = "oval"
              shape={<img src={ovalDraggable} alt="oval shape in green" className="h-[70px]"/>}
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
<div className="absolute left-90 top-50">
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
      

         

      </DndContext>
    </div>
  );
}

export default ShapesEasyLevel2;
