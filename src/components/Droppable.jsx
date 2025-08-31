import React from "react"
import { useDroppable } from "@dnd-kit/core"
import Heart from "../assets/Shapes/ShapesEasy/Heart.webp"
function Droppable({ children }){
  const {isOver,setNodeRef} = useDroppable({

    id:'droppable',
  });
  const style = {
    backgroundColor: isOver ? 'pink' : undefined,
  };


  return(<>
      <div className="h-fit"
      ref={setNodeRef}
      style={style}>
       {children || 
       <div className="relative w-[100px] h-[90px]
before:content-[''] before:absolute before:top-0 before:left-[50px]
before:h-[80px] before:w-[50px] before:rounded-t-[50px] 
before:rounded-r-[50px]before:rounded-b-0 before:rounded-l-0 
before:bg-black before:-rotate-45 before:origin-[0_100%]

after:content-[''] after:absolute after:top-0 after:left-0 after:h-[80px]
after:w-[50px] after:rounded-t-[50px] after:rounded-r-[50px] 
after:rounded-b-0 after:rounded-l-0 after:bg-black after:rotate-45
after:origin-[100%_100%]"></div> }
        
        </div>
        </>)
}
export default Droppable

{/*{<img src={Heart} className="h-[13vh]"}></img>*/}