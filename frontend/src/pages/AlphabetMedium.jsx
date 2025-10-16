import Back from "../components/Back"
import medalphabutton1 from "../assets/Alphabets/medalphabutton1.png";
import medalphabutton2 from "../assets/Alphabets/medalphabutton2.png";
import TopBar from "../components/TopBar";
import 'react-router-dom'

import { Link } from 'react-router-dom'

function AlphabetMedium(){
  return(<>
   <div className="hidden w-full md:inline md:absolute h-auto">
 
  <Back/>
  <img src="./Bg/Alphabets/alphabetmediumbg.webp" 
  alt="Easy game background" 
  className="w-full"/>
        <Link to="/alphabets/medium/level1">
          <img src={medalphabutton1} alt="Button to go to Level1" className="absolute left-[29%] top-[54%] w-auto cursor-pointer h-auto" />
        </Link>
        <Link to="/alphabets/medium/level2">
          <img src={medalphabutton2} alt="Button to go to Level2"  className="absolute left-[67%] top-[65%] w-auto cursor-pointer h-auto"/>
        </Link>
      </div>
  </>
  )
}

export default AlphabetMedium