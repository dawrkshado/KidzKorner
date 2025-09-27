import { useState } from "react"
import yellow from "../assets/Color/Easy/yellowDuckling.webp";
import green from "../assets/Color/Easy/green.webp";
import bg from "../assets/Color/Easy/bg3.webp";

function ShapesEasyLevel3() {
  const clickables = [
    {
      Answer: "yellow",
      choices: [
        { value: "yellow", img: yellow },
        { value: "green", img: green },
        { value: "", img: "" }

      ]
    },

    {
      
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

export default ShapesEasyLevel3;
