import { useState } from "react"
import a from "../assets/Alphabets/Easy/letterA.webp";
import b from "../assets/Alphabets/Easy/letterB.webp";
import c from "../assets/Alphabets/Easy/letterC.webp";
import d from "../assets/Alphabets/Easy/letterD.webp";
import bg from "../assets/Alphabets/Easy/bg.webp";

function ShapesEasyLevel1() {
  const clickables = [
    {
      Answer: "A",
      choices: [
        { value: "A", img: a },
        { value: "B", img: b },
        { value: "C", img: c },
        { value: "D", img: d }
      ]
    }
  ];

  const [index] = useState(0);

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
    <img src={bg} alt="background" className="w-full"/>
   
      <h1 className="absolute top-15 right-112 text-3xl text-white font-[coiny]">Can You Find Letter  {clickables[index].Answer}</h1>
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

export default ShapesEasyLevel1;
