import TopBar from "../components/TopBar.jsx";
import circle from "../assets/Shapes/circle.png";
import star from "../assets/Shapes/star.png";
import rectangle from "../assets/Shapes/rectangle.png";
import triangle from "../assets/Shapes/triangle.png";
import square from "../assets/Shapes/square.png";
import sbuttons from "../assets/Shapes/sbuttons.png";
import { Link } from "react-router-dom";

const speak = (text) => {
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
};

function Shapes() {
  return (
    <>
      <div className="hidden w-full md:inline md:absolute h-[100%] overflow-x-hidden">
        <TopBar />
        <img
          src="./Bg/Shapes/Shapesbg.webp"
          alt="background"
          className="w-full"
        />

        <img
          src={circle}
          alt="Circle"
          onClick={() => speak("Circle")}
          className="absolute left-[10%] top-[15%] w-auto cursor-pointer h-auto "
        />

        <img
          src={square}
          alt="Square"
          onClick={() => speak("Square")}
          className="absolute left-[38%] top-[19%] w-auto cursor-pointer h-auto "
        />

        <img
          src={triangle}
          alt="Triangle"
          onClick={() => speak("Triangle")}
          className="absolute left-[20%] top-[60%] w-auto cursor-pointer h-auto "
        />

        <img
          src={rectangle}
          alt="Rectangle"
          onClick={() => speak("Rectangle")}
          className="absolute left-[60%] top-[18%] w-auto cursor-pointer h-auto "
        />

        <img
          src={star}
          alt="Star"
          onClick={() => speak("Star")}
          className="absolute left-[45%] top-[58%] w-auto cursor-pointer h-auto "
        />

        <Link to="/shapesgame">
          <img
            src={sbuttons}
            alt="Play Shapes Game"
            className="absolute left-[70%] top-[70%] cursor-pointer"
          />
        </Link>
      </div>
    </>
  );
}

export default Shapes;
