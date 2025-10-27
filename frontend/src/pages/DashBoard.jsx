import 'react-router-dom'
import Back from '../components/Back';
import api from '../api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function DashBoard(){
const [childname,setChildName] = useState([])
const navigate = useNavigate();
const [parentData, setParentdata] = useState([]);

const [timeCompletions, setTimeCompletions] = useState([]);

const[loading, setLoading] =useState();

useEffect(() => {
  const fetchTimeCompletions = async () => {
    try {
      const res = await api.get("/api/time_completions/");
      const data =  res.data;
      setTimeCompletions(data);
      console.log(data)
    } catch (err) {
      console.error("Error fetching time completions:", err);
    }
  };
  fetchTimeCompletions();
}, []);


useEffect(() => {
    const fetchTeacherData = async () => {
      const token = localStorage.getItem("access");
      if (!token) {
        setRole(null);
        setLoading(false);
        return;
      }

      try {
        const res = await api.get("/api/parent_profile_teacherview");
        const data =  res.data;
        setParentdata(data)
      } catch (err) {
        console.error("Error fetching parent data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTeacherData();
  }, []);



    
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-xl text-[#3DA8CC]">
        Loading...
      </div>
    );

  }

const handleChildClick = (child) => {
  localStorage.setItem("selectedChild", JSON.stringify(child));
  localStorage.setItem("timeCompletions", JSON.stringify(timeCompletions))

  navigate("/dashboardparentz", { state: { child,timeCompletions } });
};


    useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await api.get("/api/child_profile/");
        const data = res.data
        setChildName(data)
        
      } catch (err) {
        console.error("Not logged in:", err);
      }
    };

    checkUser();
  }, []);

    return<>
    <Back/>
        <div  className=" flex justify-center items-center md:absolute h-screen w-screen overflow-x-hidden bg-cover bg-no-repeat" style={{backgroundImage: `url(./Bg/bground.webp)`}}>
            <div className='h-[80%] w-[80%] z-50  max-h[80%] overflow-auto'>
                <table className='h-[100%] w-[100%] bg-amber-200 text-center '>
                    <thead>
                      <tr className='font-bold border-2 text-2xl '>
                        <th className='border-2 bg-amber-400'>Name</th>
                        <th className='border-2 bg-amber-400'>Section</th>
                        <th className='border-2 bg-amber-400'>Schedule</th>
                        <th className='border-2 bg-amber-400'>Birthday</th>
                        <th className='border-2 bg-amber-400'>Parent/Guardian</th>
                        <th className='border-2 bg-amber-400'></th>
                      </tr>
                    </thead>
                    <tbody>
                        {childname.map((record) =>
                    (
                        <tr key={record.id} className='text-2xl' >
                            <td className='border-2'  >{record.first_name} {record.last_name}</td>
                            <td className='border-2'>{record.section}</td>
                            <td className='border-2'> {record.class_sched}</td>
                            <td className='border-2'>{record.birth_date}</td>
                            <td className='border-2'>{record.parent_full_name}</td>
                            <td className='border-2'> 
                              <div className='flex gap-1'>
                                 <button  onClick={() => handleChildClick(record)} className='flex items-center gap-1 scale-85  bg-gray-800 text-white  px-4 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-100'>Records</button>
                              <button className='flex items-center gap-1 bg-gray-800 text-white scale-85 px-4 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-100'>Delete</button>
                              </div>
                             
                            </td>
                        </tr>
                    ))}

                    </tbody>
                </table>
              
            </div>
        </div>
</>


}
export default DashBoard;