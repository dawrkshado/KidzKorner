
import { useState } from "react"

function ShapesEasyLevel2() {

  const something = ["eme","shimi"]

const [yawa,changeyawa] = useState(something[0]);

  return (
    <>
<h1>{yawa}</h1>

<button className="bg-amber-300" onClick={() => {changeyawa}}>click me</button>
    </>
  )
}

export default ShapesEasyLevel2