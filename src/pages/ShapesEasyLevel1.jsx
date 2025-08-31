// src/pages/ShapesGame.jsx
import React, { useState } from "react";
import {
  DndContext,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";


function Draggable({ id, color, shape }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  const style = {
    transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : "",
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="cursor-pointer"
    >
      {shape === "circle" && (
        <div className={`w-20 h-20 rounded-full`} style={{ backgroundColor: color }}></div>
      )}
      {shape === "square" && (
        <div className={`w-20 h-20`} style={{ backgroundColor: color }}></div>
      )}
      {shape === "triangle" && (
        <div
          className="w-0 h-0"
          style={{
            borderLeft: "40px solid transparent",
            borderRight: "40px solid transparent",
            borderBottom: `70px solid ${color}`,
          }}
        ></div>
      )}
    </div>
  );
}

function Droppable({ id, shape, children }) {
  const { isOver, setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={`w-24 h-24 flex items-center justify-center transition-colors`}
    >

      {!children && (
        <>
          {shape === "circle" && (
            <div
              className={`w-20 h-20 rounded-full border-4 ${
                isOver ? "border-green-500" : "border-gray-400"
              }`}
            ></div>
          )}
          {shape === "square" && (
            <div
              className={`w-20 h-20 border-4 ${
                isOver ? "border-green-500" : "border-gray-400"
              }`}
            ></div>
          )}
          {shape === "triangle" && (
            <div
              className={`w-0 h-0 border-l-[40px] border-r-[40px] border-b-[70px] ${
                isOver ? "border-b-green-500" : "border-b-gray-400"
              } border-l-transparent border-r-transparent`}
            ></div>
          )}
        </>
      )}
      {children}
    </div>
  );
}

export default function ShapesGame() {
  const [placed, setPlaced] = useState({});

  const handleDragEnd = (event) => {
    const { over, active } = event;
    if (over) {
      if (over.id === active.id) {
        setPlaced((prev) => ({ ...prev, [active.id]: active.id }));
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 p-6">
      <h1 className="text-3xl font-bold mb-8 text-indigo-700">

      </h1>

      <DndContext onDragEnd={handleDragEnd}>

        <div className="flex gap-8 mb-10">
          <Droppable id="circle" shape="circle">
            {placed["circle"] && (
              <div className="w-20 h-20 bg-red-500 rounded-full"></div>
            )}
          </Droppable>
          <Droppable id="square" shape="square">
            {placed["square"] && (
              <div className="w-20 h-20 bg-green-500"></div>
            )}
          </Droppable>
          <Droppable id="triangle" shape="triangle">
            {placed["triangle"] && (
              <div
                className="w-0 h-0 border-l-[40px] border-r-[40px] border-b-[70px] border-l-transparent border-r-transparent border-b-yellow-500"
              ></div>
            )}
          </Droppable>
        </div>

        {/* Shapes to drag */}
        <div className="flex gap-6">
          {!placed["circle"] && (
            <Draggable id="circle" color="red" shape="circle" />
          )}
          {!placed["square"] && (
            <Draggable id="square" color="green" shape="square" />
          )}
          {!placed["triangle"] && (
            <Draggable id="triangle" color="gold" shape="triangle" />
          )}
        </div>
      </DndContext>
    </div>
  );
}
