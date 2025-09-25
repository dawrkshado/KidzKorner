import { useState } from "react"
import e from "../assets/Alphabets/Easy/letterE.webp";
import f from "../assets/Alphabets/Easy/letterF.webp";
import g from "../assets/Alphabets/Easy/letterG.webp";
import h from "../assets/Alphabets/Easy/letterH.webp";
import bg from "../assets/Alphabets/Easy/bg.webp";

function ShapesEasyLevel2() {
  const clickables = [
    {
      Answer: "H",
      choices: [
        { value: "E", img: e },
        { value: "F", img: f },
        { value: "G", img: g },
        { value: "H", img: h }
      ]
    }
  ];

  const [index, setIndex] = useState(0);

  const logic = (choice) => {
    if (choice === clickables[index].Answer) {
      alert("qorique!");
    } else if (choice === clickables[index].Answer) {
      alert("Finished!");
    } else {
      alert("wrong!");
    }
  };

  return (
    <>
  
    <img src={bg} alt="background" className="w-full"  />
     <h1 className="absolute top-15 right-112 text-3xl text-white font-[coiny]">Can You Find Letter {clickables[index].Answer}</h1>
 
      <div className="flex justify-evenly justify-self-center w-150  absolute top-40">
        {clickables[index].choices.map((choice, i) => (
          <img
            key={i}
            onClick={() => logic(choice.value)}
            className="h-30 cursor-pointer"
            src={choice.img}
            alt={choice.value}
          />
        ))}
      </div>
    </>
  );
}

export default ShapesEasyLevel2;
