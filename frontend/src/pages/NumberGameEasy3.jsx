import { useState } from "react";
import bg from "../assets/Number/Easy/bglvl1.webp";
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

export default NumberGameEasy3;
