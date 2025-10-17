
import TopBar from "../components/TopBar";
import dashboard from "../assets/Teacherhomepage/una.png";
import studentmanagement from "../assets/Teacherhomepage/pangalawa.png";
import overview from "../assets/Teacherhomepage/panglima.png";
import usercontrol from "../assets/Teacherhomepage/pangapat.png";
import UploadContents from "../assets/Teacherhomepage/pangatlo.png";
import { Link } from 'react-router-dom'
import Logout from "../components/Logout";
import { useEffect,useState } from "react";
import api from "../api.js";


function TeacherHomePage() {
const [name, setName] = useState(null);

useEffect(() => {
  const fetchUserName = async () => {
    try {
      const res = await api.get("/api/user-profile/");
      setName(res.data.last_name);
    }
    catch (err) {
      console.error("Error fetching user name:", err);
    }
  };
  fetchUserName();

},[])


  return (
       
    <div className="hidden md:inline md:absolute h-screen w-screen overflow-x-hidden ">

      <div className="bg-red-500 text-4xl">Welcome {name}</div>
      <div className="md:absolute"><Logout/></div>
      
      
        <img src="./Bg/bground.png" alt="background" className="w-full"/>

        <Link to="/dashboard">
        <img src={dashboard} 
        alt="blue box Button for dashboard page" 
        className="absolute left-[25%] top-[50%] " /></Link>

        <Link to="/studentmanagement">
        <img src={studentmanagement} 
        alt="blue box Button for studentmanagement page" Z
        className="absolute left-[25%] top-[30%] "/></Link>
        
        <Link to="/overview">
        <img src={overview} 
        alt="blue box Button for overviewy page" 
        className="absolute right-[21%] top-[51%] "/></Link>

        <Link to="/usercontrol">
        <img src={usercontrol} 
        alt="blue box Button for user control page" 
        className="absolute right-[21%] top-[31%] "/></Link>

        <Link to="/uploadcontents">
        <img src={UploadContents}
        alt="blue box Button for upload"
        className="absolute left-[40%] top-[70%]"/></Link>
        
    </div>
    
  );
}

export default TeacherHomePage;
