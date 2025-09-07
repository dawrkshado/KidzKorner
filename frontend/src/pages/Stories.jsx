import TopBar from "../components/TopBar";
import Book1 from "../assets/Stories/Story1.webp"
import Book2 from "../assets/Stories/Story2.webp"
import Book3 from "../assets/Stories/Story3.webp"
import { Link } from 'react-router-dom'
import Back from "../components/Back";

    function Stories(){
          return(
          
            <>
            <div className="absolute">
              <TopBar/>
              <Back/>
              <img src="./Bg/storiesBg.webp" alt="LibraryBackground"/>
              <Link to={"/stories/story1"}><img src={Book1} alt="ButtonForStory1" className="absolute bottom-[50%] right-[43%] h-[20%] motion-preset-pulse-sm motion-duration-2000"/></Link>
              <Link to={"/stories/story2"}><img src={Book2} alt="ButtonForStory2" className="absolute bottom-[27%] left-[25%] h-[20%] motion-preset-pulse-sm motion-duration-2000"/></Link>
              <Link to={"/stories/story3"}><img src={Book3} alt="ButtonForStory3" className="absolute bottom-[3%] left-[2%] h-[20%] motion-preset-pulse-sm motion-duration-2000"/></Link>
            </div>
            </>
            
            );
    }

    export default Stories