import { useState } from "react";
import bg from "../assets/Number/Easy/bglvl2.webp";
import one from "../assets/Number/Easy/One.webp";
import two from "../assets/Number/Easy/two.webp";
import three from "../assets/Number/Easy/three.webp";
import four from "../assets/Number/Easy/four.webp";
import five from "../assets/Number/Easy/five.webp";

function NumberGameEasy1() {
  const [clicked, setClicked] = useState([]);

  const numbers = [
  { value: 1, img: one, top: 575, left: 395, width: 35, height: 35},
  { value: 2, img: two, top: 450, left: 250, width: 25, height: 25 },
  { value: 3, img: three, top: 60, left: 70, width: 40, height: 40 },
  { value: 4, img: four, top: 80, left: 1090, width: 45, height:45},
  { value: 5, img: five, top: 490, left: 1150, width: 40, height: 40},


  ];

  const handleClick = (item) => {
    if (!clicked.includes(item)) {
      setClicked([...clicked, item]);
    }
  };

  return (
    <div className="relative w-[100vw] h-[100vh]">
      <img src={bg} alt="background" className="absolute w-full h-full" />
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
    </div>
  );
}

export default NumberGameEasy1;
