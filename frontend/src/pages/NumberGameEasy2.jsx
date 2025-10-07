import { useState,useEffect } from "react";
import bg from "../assets/Number/Easy/bglvl3.webp";

import six from "../assets/Number/Easy/six.webp";
import seven from "../assets/Number/Easy/seven.webp";
import eight from "../assets/Number/Easy/eight.webp";
import nine from "../assets/Number/Easy/nine.webp";
import ten from "../assets/Number/Easy/ten.webp";

import OneStar from "../assets/Done/OneStar.webp"; 
import TwoStar from "../assets/Done/TwoStar.webp"; 
import ThreeStar from "../assets/Done/ThreeStar.webp"; 

import ReplayNBack from "../components/ReplayNBack";
    
function NumberGameEasy2() {
  const [clicked, setClicked] = useState([]);

  const numbers = [
  { value: 6, img: six, top:100, left: 1100, width: 35, height: 35 },
  { value: 7, img: seven, top: 300, left: 250, width: 40, height: 40 },
  { value: 8, img: eight, top: 450, left: 1200, width: 40, height: 40 },
  { value: 9, img: nine, top:50, left: 685, width: 40, height: 40 },
  { value: 10, img: ten, top: 460, left:730, width: 50, height: 50},
  ];



  const handleClick = (item) => {
    if (!clicked.includes(item)) {
      setClicked([...clicked, item]);
    }
  };

  const isGameFinished = clicked.length === numbers.length;

   const [count, setCount] = useState(0);
      
        useEffect(() => {
          if (isGameFinished) return; 
      
          const interval = setInterval(() => {
            setCount((prev) => prev + 1);
          }, 1000);
      
          return () => clearInterval(interval); 
        }, [isGameFinished]);


  return (
    <div className="absolute w-[100vw] h-[100vh] font-[coiny]">
      <img src={bg} alt="background" className="absolute w-full h-full" />
      
 
       <div className="absolute top-0 right-0 text-white">Your Time: {count}</div>
  {numbers.map((num, i) => (
        <div
          key={i}
          className="absolute cursor-pointer"
          style={{ top: num.top, left: num.left }}
          onClick={() => handleClick(num.value)}
        >
          {!clicked.includes(num.value) && (
            <img
            src={num.img}
            alt={`Number ${num.value}`}
            style={{ width: num.width, height: num.height }}
            className="object-contain"
            />

          )}
        </div>
      ))}

{/*Result*/}

  {isGameFinished && count < 10 && count < 20  &&(
                    <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 z-20">
                      <img
                        src={ThreeStar}
                        alt="Game Completed!"
                        className="h-[300px] animate-bounce"
                      />
                      <div className="absolute bottom-[20%] ">
                           <ReplayNBack/>
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
                       <div className="absolute bottom-[20%] ">
                           <ReplayNBack/>
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
                      <div className="absolute bottom-[20%] ">
                           <ReplayNBack/>
                      </div>
                    </div>
                  )}
      
    </div>
  );
}

export default NumberGameEasy2;
