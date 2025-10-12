
import TopBar from '../components/TopBar'
import parentsoverview from "../assets/Parents/parentsoverview.png"
import { Link } from 'react-router-dom';
import bg from "../assets/Parents/parentsbg.png"


function ParentsKorner(){

  return(<>

  <div className="hidden md:inline md:absolute h-screen w-screen bg-cover bg-top bg-no-repeat" style={{backgroundImage:`url(${bg})`}}>
    <TopBar/> 
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