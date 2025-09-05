import React, { useState } from "react";
import { DndContext, useDraggable, useDroppable, pointerWithin } from "@dnd-kit/core";
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
      className={`flex items-center justify-center h-[110px] w-[110px]`}
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

  return (
    <div className="flex h-[100vh] w-[100vw]  [&>*]:flex absolute [& > *] overflow-hidden">
      
      <DndContext onDragEnd={handleDragEnd} collisionDetection={pointerWithin}>
    <div>
      {!dropped["circle"] && (
          <Draggable
            id="circle"
            shape={<div className="h-[110px] w-[110px] rounded-full bg-red-500"></div>}
          />
        )}

              
 {!dropped ["square"] && (
          <Draggable
              id = "square"
              shape={<div className="h-[110px] w-[110px] bg-amber-400"></div>}
          />
        )}
       

         {!dropped ["triangle"] && (
          <Draggable
              id = "triangle"
              shape={<div className="w-0 h-0 z-1
             border-l-[55px] border-r-[55px] border-b-[110px] 
             border-l-transparent border-r-transparent border-b-green-600"></div>}
          />
        )}
    </div>
        
       
{/*Droppable*/}
        <div>
        <Droppable
          id="circle"
          shape={<div className="h-[110px] w-[110px] bg-gray-600 rounded-full"></div>}
          placedShape={
            dropped["circle"] && (<Draggable
                id="circle"
                shape={<div className="h-[110px] w-[110px] rounded-full bg-red-500"></div>}
                 disabled={true}/>)}/>


           <Droppable
        id = "square"
        shape={<div className="h-[100px] w-[100px]  bg-gray-600"></div>}
        placedShape={
          dropped["square"] && (<Draggable
          id="square"
          shape = {<div className="h-[110px] w-[110px] bg-amber-400"></div>}
          disabled={true}/>)}/>


           <Droppable
        id = "triangle"
        shape={<div className="border-l-[55px] border-r-[55px] border-b-[110px] 
             border-l-transparent border-r-transparent border-b-gray-600 "></div>}
        placedShape={
          dropped["triangle"] && (<Draggable
          id="triangle"
          shape = {<div className="w-0 h-0 
             border-l-[55px] border-r-[55px] border-b-[110px] 
             border-l-transparent border-r-transparent border-b-green-600"></div>}
          disabled={true}/>)}

        />
        </div>

      </DndContext>
    </div>
  );
}

export default ShapesEasyLevel1;
