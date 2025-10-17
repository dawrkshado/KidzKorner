import api from '../api.js';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Logout(){
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [role, setRole] = useState(null);  

  useEffect(() => {
    const checkUser = async () => {
      try {
        const userResponse = await api.get("/api/user-profile/");
        const userRole = userResponse.data.role;

        localStorage.setItem('userRole', userRole);
        setRole(userRole);
      } catch (err) {
        console.warn("Not logged in:", err);
        setRole(null);
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, []);

  const handleLogout = async () => {
    try {
      const refreshToken = localStorage.getItem("refresh");
      await api.post("/api/logout", { refresh_token: refreshToken });

      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      localStorage.removeItem("userRole");
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
      navigate("/login");
    }
  };

  if (loading) return <div>Loading...</div>;


  return (<div className="bg-blue-400 text-3xl w-fit hover:cursor-pointer hover:text-amber-500 " onClick={handleLogout}><p >Logout</p></div>
  );

}
export default Logout;