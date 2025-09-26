import { useState } from "react"
import pink from "../assets/Color/Easy/pink.webp";
import blue from "../assets/Color/Easy/blue.webp";
import bg from "../assets/Color/Easy/bg2.webp";

function ShapesEasyLevel2() {
  const clickables = [
    {
      Answer: "blue",
      choices: [
        { value: "pink", img: pink },
        { value: "blue", img: blue },

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
    <img src={bg} alt="background" className="w-full "/>
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
    </>
  );
}

export default ShapesEasyLevel2;
