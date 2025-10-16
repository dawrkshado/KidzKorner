import Back from "../components/Back"
import easyalphabutton1 from "../assets/Alphabets/easyalphabutton1.png";
import easyalphabutton2 from "../assets/Alphabets/easyalphabutton2.png";
import easyalphabutton3 from "../assets/Alphabets/easyalphabutton3.png";

import 'react-router-dom'

import { Link } from 'react-router-dom'



function AlphabetEasy(){
  return(<>

   <div className="hidden w-full md:inline md:absolute h-auto">

  <Back/>
  <img src="./Bg/Alphabets/alphabeteasybg.webp" 
  alt="Easy game background" 
  className="w-full"/>
        <Link to="/alphabets/easy/level1">
          <img src={easyalphabutton1} alt="Button to go to Level1" className="absolute left-[40%] top-[70%] w-auto cursor-pointer h-auto" />
        </Link>
        <Link to="/alphabets/easy/level2">
          <img src={easyalphabutton2} alt="Button to go to Level2"  className="absolute left-[55%] top-[48%] w-auto cursor-pointer h-auto"/>
        </Link>
        <Link to="/alphabets/easy/level3">
          <img src={easyalphabutton3} alt="Button to go to Level3"  className="absolute left-[40%] top-[10%] w-auto cursor-pointer h-auto"/> 
        </Link>
      </div>
  </>
  )
}

export default AlphabetEasy