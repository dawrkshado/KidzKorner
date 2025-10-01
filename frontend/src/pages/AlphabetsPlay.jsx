import TopBar from "../components/TopBar"
import { Link } from "react-router-dom"
import easyalpha from "../assets/Alphabets/easyalpha.png";
import mediumalpha from "../assets/Alphabets/mediumalpha.png";
import alphahard from "../assets/Alphabets/alphahard.png";
import Back from "../components/Back";

function AlphabetsPlay(){
  return(
    <>

<div className="hidden w-full md:inline md:absolute h-[100%]">

        <TopBar/>
          <Back/>
        <img
        src="/Bg/Alphabets/alphabetsgamepage.webp"
        alt="bg for Alpha"
        className="w-full"
        />

        <Link to="/alphabeteasy">
        <img 
        src={easyalpha} 
        alt="Easy Button"
        className="absolute left-[5%] top-[13%] w-auto cursor-pointer" />
        </Link>

        <Link to="/alphabetmedium">
        <img
        src={mediumalpha}
        alt="Medium Button"
        className="absolute left-[30%] top-[43%] w-auto cursor pointer"/>
        </Link>
        <Link to="/alphabethard">
        <img
        src={alphahard}
        alt="Hard Button"
        className="absolute left-[55%] top-[73%] w-auto cursor pointer"/>
        </Link>
    </div>
  </>
  );
  
}
export default AlphabetsPlay