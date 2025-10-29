import TopBar from "../components/TopBar.jsx";
import circle from "../assets/Shapes/circle.png";
import star from "../assets/Shapes/star.png";
import rectangle from "../assets/Shapes/rectangle.png";
import triangle from "../assets/Shapes/triangle.png";
import square from "../assets/Shapes/square.png";
import sbuttons from "../assets/Shapes/sbuttons.png";
import Back from "../components/Back.jsx";
import { Link } from "react-router-dom";


import CircleRec from "../assets/Sounds/CircleRec.mp3";
import SquareRec from "../assets/Sounds/SquareRec.mp3";
import TriangleRec from "../assets/Sounds/TriangleRec.mp3";
import RectangleRec from "../assets/Sounds/RectangleRec.mp3";
import StarRec from "../assets/Sounds/StarRec.mp3";


const playSound = (soundFile) => {
  const audio = new Audio(soundFile);
  audio.play();
};

function Shapes() {
  return (
    <>
      <div className="absolute hidden w-full h-full md:inline md:absolute overflow-x-hidden">
        <TopBar />
        <div className="top-0">
          <Back />
        </div>

        <img
          src="./Bg/Shapes/Shapesbg.webp"
          alt="background"
          className="hidden w-full md:inline md:absolute h-[100%]"
        />


        <img
          src={circle}
          alt="Circle"
          onClick={() => playSound(CircleRec)}
          className="absolute left-[10%] top-[13%] w-auto cursor-pointer h-auto"
        />

        <img
          src={square}
          alt="Square"
          onClick={() => playSound(SquareRec)}
          className="absolute left-[38%] top-[16%] w-auto cursor-pointer h-auto"
        />

        <img
          src={triangle}
          alt="Triangle"
          onClick={() => playSound(TriangleRec)}
          className="absolute left-[20%] xl:top-[50%] xl2:[60%] w-auto cursor-pointer h-auto"
        />

        <img
          src={rectangle}
          alt="Rectangle"
          onClick={() => playSound(RectangleRec)}
          className="absolute left-[60%] top-[15%] w-auto cursor-pointer h-auto"
        />

        <img
          src={star}
          alt="Star"
          onClick={() => playSound(StarRec)}
          className="absolute left-[45%] xl:top-[47%] xl2:top[58%] w-auto cursor-pointer h-auto"
        />

        <Link to="/shapesgame">
          <img
            src={sbuttons}
            alt="Play Shapes Game"
            className="absolute left-[70%] top-[67%] cursor-pointer"
          />
        </Link>
      </div>
    </>
  );
}

export default Shapes;
