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

const fetchTimeCompletions = async () => {
  try {
    const res = await api.get("/api/time_completions/");
    const data = res.data;
    setTimeCompletions(data);
    console.log(data);
  } catch (err) {
    console.error("Error fetching time completions:", err);
  }
};


useEffect(() => {
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

 const handleDeleteChild = async (childId, childName) => {
  if (!window.confirm(`Are you sure you want to delete ${childName}?`)) return;

  try {
    const res = await api.delete("/api/delete_child/", { data: { child_id: childId } });
    alert(res.data.message || `${childName} deleted successfully!`);

    setChildName((prev) => prev.filter((c) => c.id !== childId));


    await fetchTimeCompletions();
    localStorage.removeItem("timeCompletions");
  } catch (err) {
    console.error("Error deleting child:", err);
    alert(err.response?.data?.error || "Failed to delete child.");
  }
};




    
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-xl text-[#3DA8CC]">
        Loading...
      </div>
    );

  }

const handleChildClick = (child) => {

  if (!timeCompletions || timeCompletions.length === 0) {
    alert("Please wait, loading records...");
    return;
  }
  
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
               <table className="table-fixed w-full h-full border-collapse bg-amber-200 text-center">
                <thead>
                  <tr className="font-bold border-2 text-2xl">
                    <th className="border-2 bg-amber-400 w-[20%] p-2">Name</th>
                    <th className="border-2 bg-amber-400 w-[15%] p-2">Section</th>
                    <th className="border-2 bg-amber-400 w-[20%] p-2">Schedule</th>
                    <th className="border-2 bg-amber-400 w-[15%] p-2">Birthday</th>
                    <th className="border-2 bg-amber-400 w-[20%] p-2">Parent/Guardian</th>
                    <th className="border-2 bg-amber-400 w-[10%] p-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {childname.map((record) => (
                    <tr key={record.id} className="text-2xl">
                      <td className="border-2 p-2">{record.first_name} {record.last_name}</td>
                      <td className="border-2 p-2">{record.section}</td>
                      <td className="border-2 p-2">{record.class_sched}</td>
                      <td className="border-2 p-2">{record.birth_date}</td>
                      <td className="border-2 p-2">{record.parent_full_name}</td>
                      <td className="border-2 p-2">
                        <div className=" justify-center items-center">
                          <button
                            onClick={() => handleChildClick(record)}
                            className="bg-gray-800 text-white px-1 py-1  scale-90 rounded-md hover:bg-gray-700 transition transform hover:scale-100"
                          >
                            Records
                          </button>
                          <button
                            onClick={() => handleDeleteChild(record.id, `${record.first_name} ${record.last_name}`)}
                            className="bg-red-600 text-white px-4 py-1 scale-90 rounded-md hover:bg-red-500 transition transform hover:scale-100"
                          >
                            Delete
                          </button>
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