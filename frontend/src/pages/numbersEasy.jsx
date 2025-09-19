import { useState } from "react";
function numbersEasy(){

  const [clicked, setClicked] = useState([]);
  const numbers = [1, 2, 3, 4, 5];

  const handleClick = (item) => {
   if (!clicked.includes(item)) {
    setClicked([...clicked, item]);
  }
  };

  return (
    <>
      {numbers.map((number, i) => (
        <div
          key={i}
          className="bg-amber-300 h-25 w-30 m-2 p-2"
          onClick={() => handleClick(number)}
        >
          {clicked.includes(number) ? " " : number}
        </div>
      ))}
    </>
  );
}

export default numbersEasy