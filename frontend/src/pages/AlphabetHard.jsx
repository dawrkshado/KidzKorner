import Back from "../components/Back"
import hardalphabutton1 from "../assets/Alphabets/hardalphabutton1.png";


import 'react-router-dom'

import { Link } from 'react-router-dom'

function AlphabetHard(){
  return(<>
   <div className="hidden w-full md:inline md:absolute h-auto">

  <Back/>
  <img src="./Bg/Alphabets/alphabethardbg.webp" 
  alt="Easy game background" 
  className="w-full"/>
        <Link to="/alphabets/hard/level1">
          <img src={hardalphabutton1} alt="Button to go to Level1" className="absolute left-[42%] top-[54%] w-auto cursor-pointer h-auto" />
        </Link>
      </div>
  </>
  )
}

export default AlphabetHard