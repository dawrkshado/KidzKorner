import React, { useState } from "react";
import { DndContext, useDraggable, useDroppable, pointerWithin } from "@dnd-kit/core";

import heptagonDroppable from "../assets/Shapes/ShapesEasy/heptagonDroppable.webp"
import heptagonDraggable from "../assets/Shapes/ShapesEasy/heptagonDraggable.webp"
import diamondDraggable from "../assets/Shapes/ShapesEasy/diamondDraggable.webp"
import diamondDropppable from "../assets/Shapes/ShapesEasy/diamondDropppable.webp"
import pentagonDroppable from  "../assets/Shapes/ShapesEasy/diamondDroppable.webp"
import pentagonDraggable from "../assets/Shapes/ShapesEasy/pentagonDraggable.webp"
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
      className={`flex items-center justify-center h-[160px] w-[160px] `}
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

  return (
    <div className="flex h-[100vh] w-[100vw]  [&>*]:flex absolute overflow-hidden">
      
      <DndContext onDragEnd={handleDragEnd} collisionDetection={pointerWithin}>


    <div className="h-[110px] w-[360px] justify-center">             
 {!dropped ["heptagon"] && (
          <Draggable
              id = "heptagon"
              shape={<img src={heptagonDraggable} alt="a heptagon shape" className=" hover:cursor-grab h-[100px]"/>}
          />
        )}
       

         {!dropped ["diamond"] && (
          <Draggable
              id = "diamond"
              shape={<img src={diamondDraggable} alt="diamond shape in green" className="h-[100px]"/>}
          />
        )}

        {!dropped ["pentagon"] && (
          <Draggable
              id = "pentagon"
              shape={<img src={pentagonDraggable} alt="image of shape of a heart" className=" h-[100px] hover:cursor-grab"/>}
          />
        )}
    </div >
        
       
{/*Droppable*/}

      

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




      </DndContext>
    </div>
  );
}

export default ShapesEasyLevel3;
