
import TopBar from '../components/TopBar'
import parentsoverview from "../assets/Parents/parentsoverview.png"
import { Link } from 'react-router-dom';

function ParentsKorner(){

  return(<>
  <div className="hidden md:inline md:absolute h-scren w-screen overflow-hidden">
  <TopBar/>
            <img src="./Bg/parentsbg.png" 
            alt="background" 
            className="w-full"
            />
            <Link to="/parentsoverview" >
            <img 
            src={parentsoverview}
            alt="Overview Button for Parents"
            className="absolute left-[38%] top-[70%] h-auto w-auto cursor-pointer"/>
            </Link>
        </div>
  </>);

}
export default ParentsKorner;