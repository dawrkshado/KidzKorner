import { useState } from "react";
import { DndContext, useDraggable, useDroppable, pointerWithin } from "@dnd-kit/core";
import circleDroppable from "../assets/Shapes/ShapesEasy/circleDroppable.webp"
import circleDraggable from "../assets/Shapes/ShapesEasy/circleDraggable.webp"
import squareDraggable from "../assets/Shapes/ShapesEasy/squareDraggable.webp"
import squareDroppable from "../assets/Shapes/ShapesEasy/squareDroppable.webp"
import triangleDraggable from "../assets/Shapes/ShapesEasy/triangleDraggable.webp"
import triangleDroppable from "../assets/Shapes/ShapesEasy/triangleDroppable.webp"

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
      className={`flex items-center justify-center h-[160px] w-[160px]`}
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
    <div className="h-[110px] w-[360px] justify-center">
      {!dropped["circle"] && (
          <Draggable
            id="circle"
            shape={<img src={circleDraggable} alt="circle shape" className="h-[100px]"/>}
          />
        )}

              
 {!dropped ["square"] && (
          <Draggable
              id = "square"
              shape={<img src={squareDraggable} alt="square shape" className="h-[100px]"/>}
          />
        )}
       

         {!dropped ["triangle"] && (
          <Draggable
              id = "triangle"
              shape={<img src={triangleDraggable} alt="triangle shape" className="h-[100px]"/>}
          />
        )}
    </div>
        
       
{/*Droppable*/}
        <div>
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
  );
}

export default ShapesEasyLevel1;
