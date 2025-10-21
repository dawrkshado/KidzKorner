import Back from '../components/Back';
import alphabetButton from "../assets/Parents/alphabet.webp";
import colorButton from "../assets/Parents/color.webp";
import shapeButton from "../assets/Parents/shapes.webp";
import numberButton from "../assets/Parents/number.webp";
import { useState, useEffect } from 'react';
import popUp from "../assets/Parents/showsUp.webp";
import api from '../api';
import { useLocation,useNavigate } from "react-router-dom";


function ParentsDashboard() {
  const [parentData, setParentData] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();const location = useLocation();
  const child = location.state?.child;


 
  const [childRecord,setChildRecord] = useState([]);

 
  useEffect(() => {
    const fetchParentData = async () => {
      try {
        const res = await api.get("/api/parent/");
       
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




  useEffect(() =>{
    const fetchGameData = async () =>{
      try{
        const res = await api.get("/api/time_completions/")
        console.log("ChildData:", res.data);


        const filteredRecords = res.data.filter(
        (record) => record.child.id === child.id
      );


      
         setChildRecord(filteredRecords);
      }
      catch(err){
        console.error("Error fetching parent data:", err);
      }
    }
    fetchGameData();


  }, []);

  const handleClick = () => setClicked(true);
  const handleClose = () => setClicked(false);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-xl text-[#3DA8CC]">
        Loading...
      </div>
    );

  }

  return (
    <>
    
      <Back />
      <div
        className="hidden md:flex md:absolute items-center justify-center h-screen w-screen bg-cover bg-no-repeat"
        style={{ backgroundImage: `url("./Bg/parentsoverviewbg.png")` }}
      >
        {/* Buttons */}
        <div className="h-[100vh] w-fit flex flex-col items-center justify-center">
          <img src={alphabetButton} onClick={handleClick} alt="Alphabet Button" className="cursor-pointer" />
          <img src={colorButton} onClick={handleClick} alt="Color Button" className="cursor-pointer" />
          <img src={shapeButton} onClick={handleClick} alt="Shape Button" className="cursor-pointer" />
          <img src={numberButton} onClick={handleClick} alt="Number Button" className="cursor-pointer" />
        </div>

        {/* Pop-up */}
        {clicked && parentData && (
          <div className="flex justify-center items-center h-fit w-fit absolute">
            <img src={popUp} alt="Pop up background" className="w-[85%]" />

                  
                <p className='absolute z-10 top-50 text-4xl'>
                </p>

                <div className="absolute h-[100%] w-[100%] content-end  justify-items-center mt-4 text-lg text-black p-4 rounded">
                  {parentData.children && parentData.children.length > 0 ? <>
                       <div className=' absolute top-[20%] overflow-y-auto bg-amber-200 max-h-[60%] h-[60%] w-[80%] text-center '>
                    <table className='h-[100%] w-[100%] '>
                      <thead className='border-4'>
                      <tr>
                        <th>Difficulty</th>
                        <th>Level</th>
                        <th>Time</th>
                        <th>Star</th>
                      </tr>
                      </thead>
                   
                      <tbody className='border-4'>
                 
                      {childRecord.map((record,id) =>
                        (
                          <tr key={id} >
                            <td>{record.game_level.difficulty}</td>
                            <td>{record.game_level.level}</td>
                            <td>{record.time}</td>
                            <td>{record.star} ⭐</td>
                          </tr>
                        ))}
                         
                      </tbody>
                    </table>
                     </div>
                  
                  <div>
                    {child.first_name}
                  </div>
          
        
                 </> : (
                    <p className="text-gray-500">No children registered.</p>
                  )}
                </div>


            <button
              className="h-10 w-10 bg-red-500 text-white absolute top-4 right-8 z-10 rounded-full hover:bg-red-600 flex items-center justify-center"
              onClick={handleClose}
            >
              <span className="text-2xl font-bold">×</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
}

<<<<<<< HEAD

export default ParentsDashboard;

=======
export default ParentsDashboard;
>>>>>>> c5e84547f54da0505c8e5cf50084e5f0c481f066
