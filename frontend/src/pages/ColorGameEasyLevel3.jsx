import { useState,useEffect } from "react"
import yellow from "../assets/Color/Easy/yellowDuckling.webp";
import green from "../assets/Color/Easy/green.webp";
import bg from "../assets/Color/Easy/bg3.webp";


import OneStar from "../assets/Done/OneStar.webp"; 
import TwoStar from "../assets/Done/TwoStar.webp"; 
import ThreeStar from "../assets/Done/ThreeStar.webp"; 

import Back from "../components/Back";
import Restart from "../components/Restart";


function ShapesEasyLevel3() {
  const clickables = [
    {
      Answer: "yellow",
      choices: [
        { value: "yellow", img: yellow },
        { value: "green", img: green },


      ]
    },
  ];

   const [isGameFinished,setGameFinished]= useState(false);
  
    const [count, setCount] = useState(0);
          
            useEffect(() => {
              if (isGameFinished) return; 
          
              const interval = setInterval(() => {
                setCount((prev) => prev + 1);
              }, 1000);
          
              return () => clearInterval(interval); 
            }, [isGameFinished]);
    

  const [index] = useState(0);

  const logic = (choice) => {
    if (choice === clickables[index].Answer) {
      setGameFinished(true);
    } else {
      alert("wrong!");
    }
  };

  return (
    <>
    <div className="font-[coiny]">
    <img src={bg} alt="background" className="w-full "/>

        <div className="absolute top-0 right-0 text-white">Your Time: {count}</div>
      <div className="flex justify-evenly justify-self-center w-150 gap-20 absolute top-55 right-35"> 
        {clickables[index].choices.map((choice, i) => (
          <img
            key={i}
            onClick={() => logic(choice.value)}
            className="h-100  cursor-pointer"
            src={choice.img}
            alt={choice.value}
          />
        ))}
      </div>


      {isGameFinished && count < 10 && count <= 20  &&(
          <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 z-20">
                <img
                src={ThreeStar}
                alt="Game Completed!"
                className="h-[300px] animate-bounce"
                />
                <div  className="absolute bottom-35 gap-20 flex h-25  w-50 ">
                    <div>
                      <Back/>
                    </div>

                    <div>
                      <Restart/>
                    </div>

                </div>
          </div>
)}
              
{isGameFinished && count >= 20 && count <= 30 &&(
          <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 z-20">
                <img
                src={TwoStar}
                alt="Game Completed!"
                className="h-[300px] animate-bounce"
                />
                <div  className="absolute bottom-35 gap-20 flex h-25  w-50 ">
                    <div>
                      <Back/>
                    </div>
                    <div>
                      <Restart/>
                    </div>

                </div>
          </div>
)}

{isGameFinished && count > 30 &&  (
          <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 z-20">
                <img
                src={OneStar}
                alt="Game Completed!"
                className="h-[300px] animate-bounce"
                />
                <div  className="absolute bottom-35 gap-20 flex h-25  w-50 ">
                    <div>
                      <Back/>
                    </div>

                    <div>
                      <Restart/>
                    </div>

                </div>
          </div>
)}
      </div>

 
    </>
  );
}

export default ShapesEasyLevel3;
