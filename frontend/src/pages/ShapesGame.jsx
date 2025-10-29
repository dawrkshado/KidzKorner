import TopBar from "../components/TopBar.jsx";
import { Link } from "react-router-dom";
import Seasy from "../assets/Shapes/Seasy.png";
import Smedium from "../assets/Shapes/Smedium.png";
import Shard from "../assets/Shapes/Shard.png";
import Back from "../components/Back.jsx";

function ShapesGame() {
    return (
        <>
        <TopBar/>
        <div className="hidden w-full h-full md:inline md:absolute h-auto overflow-hidden">
        <div > <Back/></div>
        <img
        src="./Bg/Shapes/shapegamebg.webp"
        alt="background"
        className="w-full"
        />
        <Link to="/shapes/easy">
        <img
        src={Seasy}
        alt="Easy Button"
        className="absolute left-[5%] top-[15%] w-autocursor-pointer"
        />
        </Link>
        <Link to="/shapes/medium">
        <img
        src={Smedium}
        alt="Medium Button"
        className="absolute left-[30%] top-[45%] w-auto cursor pointer"/>
        </Link>
        <Link to="/shapes/hard">
        <img
        src={Shard}
        alt="Hard Button"
        className="absolute left-[55%] top-[75%] w-auto cursor pointer"/>
        </Link>

        </div>
        </>
    );
}

export default ShapesGame;
