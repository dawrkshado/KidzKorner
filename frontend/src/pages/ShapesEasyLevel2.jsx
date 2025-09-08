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
  const [index, setIndex] = useState(0)

  const logic = () =>{
    if (index != something.length - 1){
      setIndex( index + 1)
    }
  }

  return (
    <>
<ul>

  <li>
    {something[index].Name}
  </li>

  <li> 
     {something[index].Age}
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