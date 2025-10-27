
import apple from "../assets/Color/apple.png"
import avocado from "../assets/Color/avocado.png"
import banana from "../assets/Color/banana.png"
import blueberry from "../assets/Color/blueberry.png"
import dragonfruit from "../assets/Color/dragonfruit.png"
import grapes from "../assets/Color/grapes.png"
import orange from "../assets/Color/orange.png"
import colorbutton from "../assets/Color/colorbutton.png"
import { Link } from "react-router-dom";
import 'react-router-dom'

import Back from "../components/Back.jsx";

const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
};


function Color(){
    return(
        <> <div className="hidden w-full md:inline md:absolute h-[100%]">
      <Back/>
      <img 
      src="./Bg/Color/colorgamebg.webp"
      alt="background"
      className="w-full h-full"/>

      <img
      src={apple}
      alt="Apple is Red"
      onClick={()=> speak("Apple is Red")}
      className="absolute left-[10%] top-[10%] w-auto cursor pointer h-auto"/>

      <img
      src={avocado}
      alt="Avocado"
      onClick={()=> speak("Avocado")}
      className="absolute left-[30%] top-[10%] w-auto cursor pointer h-auto"/>

      <img
      src={banana}
      alt="Banana"
      onClick={()=> speak("Banana")}
      className="absolute left-[50%] top-[10%] w-auto cursor pointer h-auto"/>

      <img
      src={blueberry}
      alt="Blueberry"
      onClick={()=> speak("Bluebery")}
      className="absolute left-[70%] top-[10%] w-auto cursor pointer h-auto"/>

      <img
      src={dragonfruit}
      alt="Dragonfruit"
      onClick={()=> speak("Dragonfruit")}
      className="absolute left-[30%] top-[50%] w-auto cursor pointer h-auto"/>

      <img
      src={grapes}
      alt="Grapes"
      onClick={()=> speak("Grapes")}
      className="absolute left-[70%] top-[47%] w-auto cursor pointer h-auto"/>

      <img
      src={orange}
      alt="Orange"
      onClick={()=> speak("Orange")}
      className="absolute left-[53%] top-[50%] w-auto cursor pointer h-auto"/>

      <Link to="/colorgame">

      <img
      src={colorbutton}
      alt="Buttons for Color Game"
      className="absolute left-[40%] top-[82%] w-auto cursor pointer h-auto"/>
      </Link>

    </div>
    </>
      
    );
}
export default Color;

