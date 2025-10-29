import { useState,useEffect } from "react";
import { DndContext, useDraggable, useDroppable, pointerWithin } from "@dnd-kit/core";


import Rdraggable from "../assets/Alphabets/Medium/draggableR.webp";
import Sdraggable from "../assets/Alphabets/Medium/draggableS.webp";
import Tdraggable from "../assets/Alphabets/Medium/draggableT.webp";
import Udraggable from "../assets/Alphabets/Medium/draggableU.webp";
import Vdraggable from "../assets/Alphabets/Medium/draggableV.webp";
import droppableImage from "../assets/Alphabets/Medium/droppables.webp";
import bg from "../assets/Alphabets/Medium/bg2.webp";


import OneStar from "../assets/Done/OneStar.webp"; 
import TwoStar from "../assets/Done/TwoStar.webp"; 
import ThreeStar from "../assets/Done/ThreeStar.webp"; 

import ReplayNBack from "../components/ReplayNBack";

function Droppable({ id, placedShape, shape }) {
  const { isOver, setNodeRef } = useDroppable({ id });
  const style = {
    opacity: isOver ? "0.5" : "1",
    zIndex: isOver ? "10" : "1",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex items-center justify-center h-[120px] w-[120px]`}
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

function AlphabetMedium2() {
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
    dropped["r"] && dropped["s"] && dropped["t"] && dropped["u"] && dropped["v"];

   const [count, setCount] = useState(1);

  useEffect(() => {
    if (isGameFinished) return; 

    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); 
  }, [isGameFinished]);


  return (
    <>
      <div className="flex h-[100vh] w-[100vw] [&>*]:flex absolute font-[coiny] overflow-hidden">
        <img src={bg} alt="background" className="absolute w-[100vw]" />
        <div className="absolute top-0 right-0 text-white font-[coiny]">Your Time: {count}</div>
         <DndContext onDragEnd={handleDragEnd} collisionDetection={pointerWithin}>
          {!isGameFinished && (
            <>
            
              {/* Draggables */}
              <div className="flex absolute  gap-30 mt-10 w-[100vw] h-[300px] justify-center z-10 top-100 lg:top-115 p-4 rounded-lg">
                

                {!dropped["s"] && (
                  <Draggable
                    id="s"
                    shape={
                      <img
                        src={Sdraggable}
                        alt="letter S"
                        className="h-[80px]"
                      />
                    }
                  />
                )}
                
                {!dropped["t"] && (
                  <Draggable
                    id="t"
                    shape={
                      <img
                        src={Tdraggable}
                        alt="letter T"
                        className="h-[80px]"
                      />
                    }
                  />
                )}

                
                  {!dropped["v"] && (
                  <Draggable
                    id="v"
                    shape={
                      <img
                        src={Vdraggable}
                        alt="letter V"
                        className="h-[80px]"
                      />
                    }
                  />
                )}


                {!dropped["r"] && (
                  <Draggable
                    id="r"
                    shape={
                      <img
                        src={Rdraggable}
                        alt="letter R"
                        className="h-[80px]"
                      />
                    }
                  />
                )}


                 {!dropped["u"] && (
                  <Draggable
                    id="u"
                    shape={
                      <img
                        src={Udraggable}
                        alt="letter u"
                        className="h-[80px]"
                      />
                    }
                  />
                )}

              
              </div>
              

              {/* Droppables */}
              <div className="flex justify-center gap-30 absolute top-70 left-40  lg:top-85 lg:left-58 ">
                <Droppable
                  id="r"
                  shape={<img src={droppableImage} alt="Where you will drop the smaller letter" />}
                  placedShape={
                    dropped["r"] && (
                      <Draggable
                        id="r"
                        shape={<img src={Rdraggable} alt="letter r" className="h-20" />}
                        disabled={true}
                      />
                    )
                  }
                />

                <Droppable
                  id="s"
                  shape={<img src={droppableImage} alt="Where you will drop the smaller letter" />}
                  placedShape={
                    dropped["s"] && (
                      <Draggable
                        id="s"
                        shape={<img src={Sdraggable} alt="letter s"  className="h-20"/>}
                        disabled={true}
                      />
                    )
                  }
                />
                <Droppable
                  id="t"
                  shape={<img src={droppableImage} alt="Where you will drop the smaller letter" />}
                  placedShape={
                    dropped["t"] && (
                      <Draggable
                        id="t"
                        shape={<img src={Tdraggable} alt="Letter t" className="h-20" />}
                        disabled={true}
                      />
                    )
                  }
                />

                <Droppable
                  id="u"
                  shape={<img src={droppableImage} alt="Where you will drop the smaller letter" />}
                  placedShape={
                    dropped["u"] && (
                      <Draggable
                        id="u"
                        shape={<img src={Udraggable} alt="Letter U" className="h-20"/>}
                        disabled={true}
                      />
                    )
                  }
                />
                <Droppable
                  id="v"
                  shape={<img src={droppableImage} alt="Where you will drop the smaller letter" />}
                  placedShape={
                    dropped["v"] && (
                      <Draggable
                        id="v"
                        shape={<img src={Vdraggable} alt="Small Letter V" className="h-20" />}
                        disabled={true}
                      />
                    )
                  }
                />
                
                
              </div>                
            </>
          )}
       
        
     {/*Results*/}
{isGameFinished && count <= 15 &&(
  <div className="absolute inset-0 flex items-center h-full w-full justify-center bg-opacity-50 z-20  ">
      <img src={ThreeStar}
      alt="Game Completed!"
      className="h-[300px] animate-bounce"
  />

      <div className="absolute bottom-[20%] ">
        <ReplayNBack/>
      </div>


  </div>
)}

{isGameFinished && count <= 20 && count > 15 &&(
  <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 z-20">
      <img
      src={TwoStar}
      alt="Game Completed!"
      className="h-[300px] animate-bounce"/>
      <div className="absolute bottom-[20%] ">
        <ReplayNBack/>
      </div>
  </div>
)}

{isGameFinished && count > 25 &&(
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
    </>
  );
}

export default AlphabetMedium2;
