import TopBar from "../components/TopBar.jsx";
import OrangeMonster from "../assets/Home/orangeMonster.webp";
import BlueMonster from "../assets/Home/blueMonster.webp";
import RedMonster from "../assets/Home/redMonster.webp";
import TvMonster from "../assets/Home/TvMonster.webp";
import { Link } from 'react-router-dom'
function Home(){
    return(
    <>
    <div className="hidden md:inline md:absolute h-inherit overflow-y-hidden ">
        <TopBar/>
        <img src="./Bg/kidzBackground.webp" alt="background" className="w-full"/>

        <Link to="/stories"><img src={TvMonster} alt="Monster Button for stories page" className="absolute left-[14%] bottom-[43%] h-[25%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000" /></Link>

        <Link to="/numbers"><img src={RedMonster} alt="Monster Button for numbers page" className="absolute right-[10%] bottom-[20%] h-[32%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000 "/></Link>
        
        <Link to="/alphabets"><img src={BlueMonster} alt="Monster Button for alphabet page" className="absolute left-[7%] bottom-[7%] h-[40%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000"/></Link>

        <Link to="/shapes"><img id="ewan1" src={OrangeMonster} alt="Monster Button for shapes page" className="absolute left-1/2 transform -translate-x-1/2  bottom-0  h-[35%] motion-preset-pulse-sm motion-duration-2000 hover:opacity-85"/></Link>
    </div>
    </>
);
}
export default Home