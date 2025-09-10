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
    choices: ["Circle", "Triangle","Square", "Oval"]
  },

  {
    Name: "Glai",
    Age:18,
    Image:`${ball}`,
    Answer:"Circle",
    choices: ["Circle", "Triangle","Square", "Oval"]
  }
  ]
  const [index, setIndex] = useState(0)

  const logic = (choice) =>{
    if (choice === something[index].Answer && index < something.length - 1){
      alert ("qorique!")
      setIndex(index + 1);
    }
    else{
      alert ("wrong!")
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

{something[index].choices.map((word,i) => (
  <button key={i} className="bg-amber-300 m-2 px-4 py-2 rounded" onClick={() =>logic(word)}>
    
    {word}
    
    </button>
))}


    </>
  )
}

export default ShapesEasyLevel2