
import parentsoverview from "../assets/Parents/parentsoverview.png"
import { Link,useNavigate } from 'react-router-dom';
import bg from "../assets/Parents/parentsbg.png"
import Logout from "../components/Logout";


function ParentsKorner(){
  

  return(<>

  <div className="hidden md:inline md:absolute h-screen w-screen bg-cover bg-top bg-no-repeat" style={{backgroundImage:`url(${bg})`}}>
            <Link to="/overview" >
              <img 
                src={parentsoverview}
                alt="Overview Button for Parents"
                className="absolute left-[38%] top-[70%] h-auto w-auto cursor-pointer"/>
            </Link>
            
            <Link to="/home">
              <div className='h-30 w-60 flex items-center justify-center bg-amber-500 absolute top-80 right-150'>
                To StudentPage
              </div>
            </Link>

            <Link to="/childRegistration">
              <div className="h-30 w-60 lex items-center justify-center bg-pink-500 absolute top-40 right-150"> To Child Registration</div>
            </Link>
            
            <Logout/>
        </div>
  </>);

}
export default ParentsKorner;