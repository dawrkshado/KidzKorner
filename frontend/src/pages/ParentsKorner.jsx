
import kidsregister from '../assets/Parents/kidsregister.webp';
import kidzkornerbutton from '../assets/Parents/kidzkornerbutton.webp'
import dashboardparentz from '../assets/Parents/dashboardparentz.webp'
import { Link,useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import bg from "../assets/Parents/bgparentskorner.webp"
=======
import { useState,useEffect } from "react";
import bg from "../assets/Parents/parentsbg.png"
>>>>>>> 2c881f07f0677e9271c9f4312edee0885396f401
import Logout from "../components/Logout";
import api from '../api';

function ParentsKorner(){
  const [checkUser, setCheckUser] = useState(null);

    useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await api.get("/api/user-profile/");
        console.log(res.data)
        setCheckUser(res.data.first_name);
      } catch (err) {
        console.error("Not logged in:", err);
      }
    };

    checkUser();
  }, []);

  

  return(<>

  <div className="hidden md:inline md:absolute h-screen w-screen bg-cover bg-top bg-no-repeat" style={{backgroundImage:`url(${bg})`}}>
<<<<<<< HEAD
            <Link to="/ParentsChildRegistration" >
=======
           <div className="text-4xl bg-amber-500">
              Welcome {checkUser}!
           </div>
           
            <Link to="/overview" >
>>>>>>> 2c881f07f0677e9271c9f4312edee0885396f401
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