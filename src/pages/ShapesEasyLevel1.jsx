import {React, useState } from 'react';
import {DndContext} from '@dnd-kit/core';
import { pointerWithin } from '@dnd-kit/core';
import { useDroppable } from "@dnd-kit/core"
import { useDraggable } from "@dnd-kit/core"

function Droppable({ children,outline }){
  const {isOver,setNodeRef} = useDroppable({
    id:'droppable',
  });
  const style = {
    opacity: isOver ? '' : undefined,
  };


  return(<>
      <div className={`flex h-30 w-30  items-center justify-center  border-2 border-gray-600 ${isOver ? "border-green-600" : ""}`} 
      ref={setNodeRef}
      style={style}>
        </div>
        </>)
}

function Draggable({disabled = false}){  
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: 'draggable',
    disabled,
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return(<>
      <div
      ref={setNodeRef}
      style={style}
      {...(!disabled ? attributes: {})}
      {...(!disabled ? listeners:{})}
      
      className=" h-[110px] w-[110px] bg-amber-400 z-1"></div>
        </>)
}
function ShapesEasyLevel1(){
  const [isDropped,setIsDropped] = useState(false)
  function handleDragEnd(event){
    if(event.over && event.over.id === 'droppable'){
      setIsDropped(true)
    }
  }
  return(<> <div>

    <DndContext onDragEnd={handleDragEnd}
 collisionDetection={pointerWithin} 
>
  
   {!isDropped && <Draggable/>}
    <Droppable>
       {isDropped && <Draggable disabled/>}
      </Droppable>

      <Droppable children={<div children="flex h-30 w-30  items-center justify-center  border-2 border-gray-600"></div>}></Droppable>
 
 </DndContext>
  </div>
  </>)
}



export default ShapesEasyLevel1