import { useDraggable } from "@dnd-kit/core"
import React from "react"


function Draggable(){  
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: 'draggable',
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return(<>
      <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="relative w-[100px] h-[90px]
before:content-[''] before:absolute before:top-0 before:left-[50px]
before:h-[80px] before:w-[50px] before:rounded-t-[50px] 
before:rounded-r-[50px]before:rounded-b-0 before:rounded-l-0 
before:bg-white before:-rotate-45 before:origin-[0_100%]

after:content-[''] after:absolute after:top-0 after:left-0 after:h-[80px]
after:w-[50px] after:rounded-t-[50px] after:rounded-r-[50px] 
after:rounded-b-0 after:rounded-l-0 after:bg-white after:rotate-45
after:origin-[100%_100%]
"></div>
        </>)
}
export default Draggable