import { useState } from "react";
import { DndContext, useDraggable, useDroppable, pointerWithin } from "@dnd-kit/core";
import circleDroppable from "../assets/Shapes/ShapesEasy/circleDroppable.webp"
import circleDraggable from "../assets/Shapes/ShapesEasy/circleDraggable.webp"
import squareDraggable from "../assets/Shapes/ShapesEasy/squareDraggable.webp"
import squareDroppable from "../assets/Shapes/ShapesEasy/squareDroppable.webp"
import triangleDraggable from "../assets/Shapes/ShapesEasy/triangleDraggable.webp"
import triangleDroppable from "../assets/Shapes/ShapesEasy/triangleDroppable.webp"
import bg from "../assets/Shapes/ShapesEasy/lvl1Bg.webp"

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
      className={`flex items-center justify-center h-[160px] w-[160px] gap-10 `}
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

  return (<>
    
   <div className="flex h-[100vh] w-[100vw]  [&>*]:flex absolute [& > *] overflow-hidden">
      <img src={bg} alt="background" className="absolute w-[100vw]" />
      <DndContext onDragEnd={handleDragEnd} collisionDetection={pointerWithin}>
        
    <div className="flex absolute gap-6 w-[460px] h-[300px] justify-center z-10 top-100 right-110  p-4 rounded-lg">
      {!dropped["circle"] && (
          <Draggable
            id="circle"
            shape={<img src={circleDraggable} alt="circle shape" className="h-[80px] "/>}
          />
        )}

              
 {!dropped ["square"] && (
          <Draggable
              id = "square"
              shape={<img src={squareDraggable} alt="square shape" className="h-[80px]"/>}
          />
        )}
       

         {!dropped ["triangle"] && (
          <Draggable
              id = "triangle"
              shape={<img src={triangleDraggable} alt="triangle shape" className="h-[80px]"/>}
          />
        )}
    </div>
        
       
{/*Droppable*/}
        <div className="flex justify-center gap-6 absolute top-50 right-105">
        <Droppable
          id="circle"
          shape={<img src={circleDroppable} alt="transparent circle shape" />}
          placedShape={
            dropped["circle"] && (<Draggable
                id="circle"
                shape={<img src={circleDraggable} alt="circle shape"/>}
                 disabled={true}/>)}/>


           <Droppable
        id = "square"
        shape={<img src={squareDroppable} alt="transparent square shape" />}
        placedShape={
          dropped["square"] && (<Draggable
          id="square"
          shape = {<img src={squareDraggable} alt="square shape"/>}
          disabled={true}/>)}/>


           <Droppable
        id = "triangle"
        shape={<img src={triangleDroppable} alt="transparent triangle shape" />}
        placedShape={
          dropped["triangle"] && (<Draggable
          id="triangle"
          shape = {<img src={triangleDraggable} alt="triangle shape"/>}
          disabled={true}/>)}

        />
        </div>

      </DndContext>
    </div>
  </>

    
  )
}

export default ShapesEasyLevel1;
