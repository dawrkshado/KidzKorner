
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
  
  
  return (
    <>
<ul>
  {something.map((listahan,i) =>(
      <li key={i}>
          {listahan.Name} - {listahan.Age}
  </li>
  ))}

</ul>

<button className="bg-amber-300" >click me</button>
    </>
  )
}

export default ShapesEasyLevel2