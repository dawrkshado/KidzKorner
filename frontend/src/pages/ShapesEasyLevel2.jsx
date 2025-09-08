
import { useState } from "react"

function ShapesEasyLevel2() {
  const something = [
    {
    Name: "Jp",
    Age: 20
  },

  {
    Name: "Glai",
    Age:18
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
    {something[index].Name} - {something[index].Age}
  </li>

</ul>

<button className="bg-amber-300" onClick={logic}>click me</button>
    </>
  )
}

export default ShapesEasyLevel2