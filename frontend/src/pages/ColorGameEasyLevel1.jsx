import { useState } from "react"
import red from "../assets/Color/Easy/red.webp";
import yellow from "../assets/Color/Easy/yellow.webp";
import bg from "../assets/Color/Easy/bg1.webp";

function ShapesEasyLevel1() {
  const clickables = [
    {
      Answer: "red",
      choices: [
        { value: "red", img: red },
        { value: "yellow", img: yellow },

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

export default ShapesEasyLevel1;
