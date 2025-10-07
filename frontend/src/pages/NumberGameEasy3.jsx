import { useState,useEffect } from "react";
import bg from "../assets/Number/Easy/bglvl2.webp";
import one from "../assets/Number/Easy/One.webp";
import two from "../assets/Number/Easy/two.webp";
import three from "../assets/Number/Easy/three.webp";
import four from "../assets/Number/Easy/four.webp";
import five from "../assets/Number/Easy/five.webp";
import six from "../assets/Number/Easy/six.webp";
import seven from "../assets/Number/Easy/seven.webp";
import eight from "../assets/Number/Easy/eight.webp";
import nine from "../assets/Number/Easy/nine.webp";
import ten from "../assets/Number/Easy/ten.webp";

import OneStar from "../assets/Done/OneStar.webp"; 
import TwoStar from "../assets/Done/TwoStar.webp"; 
import ThreeStar from "../assets/Done/ThreeStar.webp"; 

import ReplayNBack from "../components/ReplayNBack";


function NumberGameEasy3() {
  const [clicked, setClicked] = useState([]);

  const numbers = [
  { value: 1, img: one, top: 550, left: 700, width: 40, height: 40 },
  { value: 2, img: two, top: 560, left: 440, width: 40, height: 40 },
  { value: 3, img: three, top: 500, left: 1110, width: 40, height: 40 },
  { value: 4, img: four,top: 40, left: 1060, width: 50, height: 50},
  { value: 5, img: five, top: 70, left: 30, width: 40, height: 40 },
  { value: 6, img: six, top: 300, left: 1180, width: 60, height: 60 },
  { value: 7, img: seven, top: 350, left: 50, width: 40, height: 40 },
  { value: 8, img: eight,  top: 260, left: 250, width: 60, height: 60 },
  { value: 9, img: nine, top: 160, left: 650, width: 40, height: 40},
  { value: 10, img: ten, top: 510, left: 230, width: 40, height: 40 },

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

  {isGameFinished && count <= 20  && count <= 30 &&(
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
        
                    {isGameFinished && count >= 20 &&(
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

export default NumberGameEasy3;
