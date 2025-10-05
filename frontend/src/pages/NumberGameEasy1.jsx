import { useState,useEffect } from "react";
import bg from "../assets/Number/Easy/bglvl2.webp";

import one from "../assets/Number/Easy/One.webp";
import two from "../assets/Number/Easy/two.webp";
import three from "../assets/Number/Easy/three.webp";
import four from "../assets/Number/Easy/four.webp";
import five from "../assets/Number/Easy/five.webp";

import OneStar from "../assets/Done/OneStar.webp"; 
import TwoStar from "../assets/Done/TwoStar.webp"; 
import ThreeStar from "../assets/Done/ThreeStar.webp"; 

import Back from "../components/Back";
import Restart from "../components/Restart";
    
function NumberGameEasy1() {
  const [clicked, setClicked] = useState([]);

  const numbers = [
  { value: 1, img: one, top: 575, left: 395, width: 35, height: 35 },
  { value: 2, img: two, top: 450, left: 250, width: 25, height: 25 },
  { value: 3, img: three, top: 60, left: 70, width: 40, height: 40 },
  { value: 4, img: four, top: 80, left: 1090, width: 45, height: 45 },
  { value: 5, img: five, top: 490, left: 1150, width: 40, height: 40},
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

  {isGameFinished && count <= 20  &&(
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
        
                    {isGameFinished && count >= 20 &&(
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
  );
}

export default NumberGameEasy1;
