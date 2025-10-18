
import kidsregister from '../assets/Parents/kidsregister.webp';
import kidzkornerbutton from '../assets/Parents/kidzkornerbutton.webp'
import dashboardparentz from '../assets/Parents/dashboardparentz.webp'
import { Link,useNavigate } from 'react-router-dom';

import { useState,useEffect } from 'react';
import bg from "../assets/Parents/bgparentskorner.webp"

import Logout from "../components/Logout";
import api from '../api';

function ParentsKorner(){
    const [clicked, setClicked] = useState(false);
    const [checkUser, setCheckUser] = useState(null);
    const [parentData, setParentData] = useState(null);
    const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchParentData = async () => {
      try {
        const res = await api.get("/api/parent/");
        console.log("Fetched data:", res.data);

        const data = Array.isArray(res.data) ? res.data[0] : res.data;
        setParentData(data);
      } catch (err) {
        console.error("Error fetching parent data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchParentData();
  }, []);


useEffect(() => {
  const fetchUserName = async () => {
    try {
      const res = await api.get("/api/user-profile/");
      setCheckUser(res.data.first_name);
    }
    catch (err) {
      console.error("Error fetching user name:", err);
    }
  };
  fetchUserName();

},[])


  const handleClick = () => {
    setClicked(true)
  }

  const handleExit = () =>{
    setClicked(false)
  }

  return(<>

  <div className="hidden md:flex md:absolute h-screen w-screen bg-cover bg-top bg-no-repeat" style={{backgroundImage:`url(${bg})`}}>

           <div className="text-3xl  h-fit w-fit absolute top-60 left-97.5">
              Welcome, <br/> {checkUser}!
           </div>
           
            <Link to="/childRegistration" >
              <img 
                src={kidsregister}
                alt="Registration Button for Parents"
                className="absolute left-[42%] top-[34%] h-auto w-auto cursor-pointer"/>
            </Link>
      
            <Link to="/dashboardparentz" >
              <img 
                src={dashboardparentz}
                alt="Dashboard for Parents"
                className="absolute left-[77%] top-[34%] h-auto w-auto cursor-pointer"/>
            </Link>

            <img 
                src={kidzkornerbutton}
                alt="Entire Games for Kidz"
                className="absolute left-[10%] top-[34%] h-auto w-auto cursor-pointer" 
                onClick={handleClick}
                />


{
  clicked && <>
  <div className='h-full w-full bg-black opacity-45 absolute'></div>
  <div className='h-full w-full absolute z-10 flex justify-center items-center '>

    <div className='h-100 w-200 bg-amber-400 z-10 absolute flex items-center justify-center' >
      
      <div className=' absolute top-3 flex  text-5xl'>
        <h1> Who will play?</h1>
      </div>
        <button className="h-10 w-10 bg-red-500 text-white 
        absolute font-bold text-3xl top-4 right-8 z-10 
        rounded-full hover:bg-red-600 flex items-center justify-center"
         onClick={handleExit}>x</button>

        {parentData.children && parentData.children.length > 0 ? (
          <>
            <div className=' h-[70%] w-[100%] text-center text-5xl bg-blue-300 '>
            {parentData.children.map((child) => <>

            <Link to="/home">
              <div className='m-10  bg-amber-50 '>
              {child.first_name} {child.last_name}
              </div>
            </Link>
            </>
          )}
        </div>
        </>
        ) : (
        <p className="text-gray-500">No children registered.</p>
        )}
    </div>
  </div>
  </>
}
 <Logout/>
        </div>
        </>);

}
export default ParentsKorner;