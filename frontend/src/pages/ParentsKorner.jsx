
import kidsregister from '../assets/Parents/kidsregister.webp';
import kidzkornerbutton from '../assets/Parents/kidzkornerbutton.webp'
import dashboardparentz from '../assets/Parents/dashboardparentz.webp'
import { Link,useNavigate } from 'react-router-dom';
import bg from "../assets/Parents/bgparentskorner.webp"
import Logout from "../components/Logout";


function ParentsKorner(){
  

  return(<>

  <div className="hidden md:inline md:absolute h-screen w-screen bg-cover bg-top bg-no-repeat" style={{backgroundImage:`url(${bg})`}}>
            <Link to="/ParentsChildRegistration" >
              <img 
                src={kidsregister}
                alt="Registration Button for Parents"
                className="absolute left-[42%] top-[34%] h-auto w-auto cursor-pointer"/>
            </Link>
            <Link to="/home" >
              <img 
                src={kidzkornerbutton}
                alt="Entire Games for Kidz"
                className="absolute left-[10%] top-[34%] h-auto w-auto cursor-pointer"/>
            </Link>
            <Link to="/dashboardparentz" >
              <img 
                src={dashboardparentz}
                alt="Dashboard for Parents"
                className="absolute left-[77%] top-[34%] h-auto w-auto cursor-pointer"/>
            </Link>
            
           
            
            <Logout/>
        </div>
  </>);

}
export default ParentsKorner;