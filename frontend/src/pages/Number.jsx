import TopBar from "../components/TopBar"
import { Link } from "react-router-dom"
import 'react-router-dom'
import one from "../assets/Number/one.png"
import two from "../assets/Number/two.png"
import three from "../assets/Number/three.png"
import four from "../assets/Number/four.png"
import five from "../assets/Number/five.png"
import six from "../assets/Number/six.png"
import seven from "../assets/Number/seven.png"
import eight from "../assets/Number/eight.png"
import nine from "../assets/Number/nine.png"
import ten from "../assets/Number/ten.png"
import numberplay from "../assets/Number/numberplay.png";


const speak = (text) => {
  const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
};

function Number(){

  return(
  <><div className="hidden w-full md:inline md:absolute h-auto">
    <TopBar/>
    <img
    src="./Bg/Number/numberpagebg.png"
    alt="background"
    className="w-full"/>

    <img
    src={one}
    alt="One"
    onClick={()=> speak("One")}
    className="absolute left-[10%] top-[10%] w-auto cursor pointer h-auto"/>

    <img
    src={two}
    alt="Two"
    onClick={()=> speak("Two")}
    className="absolute left-[23%] top-[10%] w-auto cursor pointer h-auto"/>

    <img
    src={three}
    alt="Three"
    onClick={()=> speak("Three")}
    className="absolute left-[39%] top-[10%] w-auto cursor pointer h-auto"/>

    <img
    src={four}
    alt="Four"
    onClick={()=> speak("Four")}
    className="absolute left-[57%] top-[10%] w-auto cursor-pointer h-auto"/>

    <img
    src={five}
    alt="Five"
    onClick={()=> speak("Five")}
    className="absolute left-[75%] top-[10%] w-auto cursor pointer h-auto"/>

    <img
    src={six}
    alt="Six"
    onClick={()=> speak("Six")}
    className="absolute left-[8%] top-[47%] w-auto cursor pointer h-auto"/>

    <img
    src={seven}
    alt="Seven"
    onClick={()=> speak("Seven")}
    className="absolute left-[22%] top-[47%] w-auto cursor pointer h-auto"/>

    <img
    src={eight}
    alt="Eight"
    onClick={()=> speak("Eight")}
    className="absolute left-[37%] top-[47%] w-auto cursor pointer h-auto"/>

    <img
    src={nine}
    alt="Nine"
    onClick={()=> speak("Nine")}
    className="absolute left-[55%] top-[45%] w-auto cursor pointer h-auto"/>

    <img
    src={ten}
    alt="Ten"
    onClick={()=> speak("Ten")}
    className="absolute left-[70%] top-[45%] w-auto cursor pointer h-auto"/>

    <Link to="/numbergame">
    <img
    src={numberplay}
    alt="Buttons for Number Game"
    className="absolute left-[40%] top-[82%] w-auto cursor pointer h-auto"/>

    </Link>
  </div>
  </>
  );

}
export default Number