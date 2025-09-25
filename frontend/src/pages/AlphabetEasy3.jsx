import { useState } from "react"
import i from "../assets/Alphabets/Easy/letterI.webp";
import j from "../assets/Alphabets/Easy/letterJ.webp";
import k from "../assets/Alphabets/Easy/letterK.webp";
import l from "../assets/Alphabets/Easy/letterL.webp";
import bg from "../assets/Alphabets/Easy/bg.webp";

function ShapesEasyLevel3() {
  const clickables = [
    {
      Answer: "K",
      choices: [
        { value: "I", img: i },
        { value: "J", img: j },
        { value: "K", img: k },
        { value: "L", img: l }
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
  
    <img src={bg} alt="background" className="w-full h-full"  />
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

export default ShapesEasyLevel3;
