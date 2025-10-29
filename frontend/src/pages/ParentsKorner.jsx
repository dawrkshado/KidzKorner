import kidsregister from '../assets/Parents/kidsregister.webp';
import kidzkornerbutton from '../assets/Parents/kidzkornerbutton.webp';
import dashboardparentz from '../assets/Parents/dashboardparentz.webp';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import bg from "../assets/Parents/bgparentskorner.webp";
import Logout from "../components/Logout";
import api from '../api';

function ParentsKorner() {
  const [clicked, setClicked] = useState(false);
  const [checkUser, setCheckUser] = useState(null);
  const [parentData, setParentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hoveredItem, setHoveredItem] = useState();
  const [activeAction, setActiveAction] = useState(null);

  const navigate = useNavigate();

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

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const res = await api.get("/api/user-profile/");
        setCheckUser(res.data.first_name);
      } catch (err) {
        console.error("Error fetching user name:", err);
      }
    };
    fetchUserName();
  }, []);

  const handleChildClick = (child) => {
    localStorage.setItem("selectedChild", JSON.stringify(child));

    if (activeAction === "KidzKorner") {
      navigate("/home", { state: { child } });
    } else if (activeAction === "Dashboard") {
      navigate("/dashboardparentz", { state: { child } });
    }

    setClicked(false);
  };

  const openModal = (action) => {
    setActiveAction(action);
    setClicked(true);
  };

  const handleExit = () => {
    setClicked(false);
    setActiveAction(null);
  };

  const handleHover = (id) => {
    setHoveredItem(id);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-xl text-[#3DA8CC] font-[coiny]">
        Loading...
      </div>
    );
  }

  return (
    <>
      <div
        className="hidden md:flex md:absolute h-screen w-screen bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="text-3xl h-fit w-fit absolute top-60 left-97.5">
          Welcome, <br /> {checkUser}!
        </div>

        <Link to="/childRegistration">
          <div
            onMouseEnter={() => handleHover("Register your children")}
            onMouseLeave={() => setHoveredItem()}
            className="absolute flex left-[42%] justify-center items-center top-[34%] h-auto w-auto cursor-pointer"
          >
            <img src={kidsregister} alt="Registration Button for Parents" />
            {hoveredItem === "Register your children" && (
              <div className="absolute bg-black text-white p-2 rounded mt-2">
                {hoveredItem}
              </div>
            )}
          </div>
        </Link>

        <div
          onMouseEnter={() => handleHover("Check children progress")}
          onMouseLeave={() => setHoveredItem()}
          onClick={() => openModal("Dashboard")}
          className="absolute left-[77%] flex justify-center items-center top-[34%] h-auto w-auto cursor-pointer"
        >
          <img src={dashboardparentz} alt="Dashboard for Parents" />
          {hoveredItem === "Check children progress" && (
            <div className="absolute bg-black text-white p-2 rounded mt-2">
              {hoveredItem}
            </div>
          )}
        </div>

        <div
          onMouseEnter={() => handleHover("Play games")}
          onMouseLeave={() => setHoveredItem()}
          onClick={() => openModal("KidzKorner")}
          className="absolute flex justify-center items-center left-[10%] top-[34%] h-auto w-auto cursor-pointer"
        >
          <img src={kidzkornerbutton} alt="Entire Games for Kidz" />
          {hoveredItem === "Play games" && (
            <div className="absolute bg-black text-white p-2 rounded mt-2">
              {hoveredItem}
            </div>
          )}
        </div>

        {clicked && (
          <>
            <div className="h-full w-full bg-black opacity-45 absolute"></div>
            <div className="h-full w-full absolute z-10 flex justify-center items-center">
              <div className="h-100 w-200 bg-amber-400 z-10 absolute flex items-center justify-center">
                <div className="absolute top-3 flex text-4xl">
                  <h1>
                    {activeAction === "Dashboard"
                      ? "Select a child to view progress"
                      : "Who will play?"}
                  </h1>
                </div>

                <button
                  className="h-10 w-10 bg-red-500 text-white absolute font-bold text-3xl top-4 right-8 z-10 rounded-full hover:bg-red-600 flex items-center justify-center"
                  onClick={handleExit}
                >
                  x
                </button>

                {parentData.children && parentData.children.length > 0 ? (
                  <div className="h-[70%] w-[100%] text-center content-center text-5xl bg-blue-300">
                    {parentData.children.map((child) => (
                      <div
                        key={child.id}
                        onClick={() => handleChildClick(child)}
                        className="bg-amber-50 first:mb-5 last:mt-5 cursor-pointer hover:bg-amber-200 transition"
                      >
                        {child.first_name} {child.last_name}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No children registered.</p>
                )}
              </div>
            </div>
          </>
        )}

        {/* Temporary Admin Button */}
        <div className="absolute bottom-10 right-10 z-50">
          <Link to="/admin">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 shadow-md">
              Admin
            </button>
          </Link>
        </div>

        <Logout />
      </div>
    </>
  );
}

export default ParentsKorner;
