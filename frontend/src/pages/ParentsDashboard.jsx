import Back from '../components/Back';
import alphabetButton from "../assets/Parents/alphabet.webp";
import colorButton from "../assets/Parents/color.webp";
import shapeButton from "../assets/Parents/shapes.webp";
import numberButton from "../assets/Parents/number.webp";
import { useState, useEffect } from 'react';
import popUp from "../assets/Parents/showsUp.webp";
import api from '../api';


function ParentsDashboard() {
  const [parentData, setParentData] = useState(null);
  const [clicked, setClicked] = useState(false);
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

            <div className="absolute bg-white/90 p-6 rounded-xl max-w-md shadow-xl">
              <div className="text-2xl bg-amber-500 p-4 rounded-xl text-center">
                <p>
                  Welcome{" "}
                  <span className="font-semibold">
                    {parentData.first_name} {parentData.last_name}
                  </span>
                  !
                </p>

                <div className="mt-4 text-lg bg-white text-black p-4 rounded">
                  <p className="font-bold mb-2">Children:</p>

                  {parentData.children && parentData.children.length > 0 ? (
                    <ul className="space-y-2 text-left">
                      {parentData.children.map((child) => (
                        <li key={child.id || child.first_name} className="border-b pb-2">
                          👶 {child.first_name} {child.last_name} — born on{" "}
                          {new Date(child.birth_date).toLocaleDateString()}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500">No children registered.</p>
                  )}
                </div>
              </div>
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


export default ParentsDashboard;

