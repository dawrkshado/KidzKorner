import { useState } from "react"
import pizza from "../assets/Shapes/ShapesEasy/placeholderPizza.webp"
import ball from "../assets/Shapes/ShapesEasy/basketballPlaceholder.webp"
function ShapesEasyLevel2() {
  const something = [
    {
    Name: "Jp",
    Age: 20,
    Image : `${pizza}`,
    Answer: "Triangle",
    choices: ["Circle", "Triangle ","Square"]
  },

  {
    Name: "Glai",
    Age:18,
    Image:`${ball}`,
    Answer:"Circle"
  }
  ]
  
  
  return (
    <>
<ul>
  {something.map((listahan,i) =>(
      <li key={i}>
          {listahan.Name} - {listahan.Age}
  </li>
  
  <li>
    <img className="h-40" src={something[index].Image} alt="" />
  </li>

</ul>

<button className="bg-amber-300" onClick={logic}>{something[index].Answer}</button>
    </>
  )
}

export default ShapesEasyLevel2

