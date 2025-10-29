import OrangeMonster from "../assets/Home/shapemonster.webp";
import BlueMonster from "../assets/Home/blueMonster.webp";
import bluemonster from "../assets/Home/numberMonster.webp";
import TvMonster from "../assets/Home/TvMonster.webp";
import redmonster from "../assets/Home/redmonster.webp";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import api from "../api";
import backlatest from "../assets/Parents/backlatest.webp";
import { useLocation } from "react-router-dom";
import lessonsupload from "../assets/Parents/lessonsupload.webp";
import partbg from "../assets/Parents/partbg.webp";

function Home() {

  const location = useLocation();
  const [child, setChild] = useState(location.state?.child || null);

  useEffect(() => {
    if (!child) {
      const storedChild = localStorage.getItem("selectedChild");
      if (storedChild) {
        setChild(JSON.parse(storedChild));
      }
    }
  }, [child]);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await api.get("/api/user-profile/");
        console.log(res.data);
      } catch (err) {
        console.error("Not logged in:", err);
      }
    };

    checkUser();
  }, []);

  return (
    <>
      <div className="hidden w-[100vw] md:inline md:absolute h-[100%] overflow-hidden">

        {/* ✅ Welcome banner with background image */}
        <div className="absolute top-[4%] left-[35%] transform -translate-x-1/2 text-center">
          <div className="relative inline-block">
            <img
              src={partbg}
              alt="Welcome Background"
              className="w-[400px] h-auto drop-shadow-lg"
            />
            <h1 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white">
              {child ? child.first_name : "Guest"}
            </h1>
          </div>
        </div>

        {/* 🔙 Back button */}
        <Link to="/parentskorner">
          <img
            src={backlatest}
            alt="Back Button"
            className="absolute left-[1%] top-[1%] w-24"
          />
        </Link>

        {/* 📚 Upload lessons button */}
        <Link to="/uploadedFiles">
          <img
            src={lessonsupload}
            alt="Upload Lessons"
            className="absolute right-[20%] top-[35%] w-32 h-32 hover:opacity-80 transition"
          />
        </Link>

        {/* 🌈 Background */}
        <img src="./Bg/kidzBackground.webp" alt="background" className="w-full" />

        {/* 🧩 Monster buttons */}
        <Link to="/color">
          <img
            src={redmonster}
            alt="Monster Button for color page"
            className="absolute right-[22%] bottom-[10%] h-[35%] transition transform hover:opacity-70 motion-preset-pulse-sm motion-duration-2000"
          />
        </Link>

        <Link to="/stories">
          <img
            src={TvMonster}
            alt="Monster Button for stories page"
            className="absolute left-[15%] bottom-[42%] h-[25%] transition transform hover:opacity-70 motion-preset-pulse-sm motion-duration-2000"
          />
        </Link>

        <Link to="/number">
          <img
            src={bluemonster}
            alt="Monster Button for numbers page"
            className="absolute right-[10%] bottom-[0%] h-[35%] transition transform hover:opacity-70 motion-preset-pulse-sm motion-duration-2000"
          />
        </Link>

        <Link to="/alphabets">
          <img
            src={BlueMonster}
            alt="Monster Button for alphabet page"
            className="absolute left-[5%] bottom-[0%] h-[41%] transition transform hover:opacity-70 motion-preset-pulse-sm motion-duration-2000"
          />
        </Link>

        <Link to="/shapes">
          <img
            id="shapemonster"
            src={OrangeMonster}
            alt="Monster Button for shapes page"
            className="absolute left-[30%] bottom-[0%] h-[35%] transition transform motion-preset-pulse-sm motion-duration-2000 hover:opacity-85"
          />
        </Link>

      </div>
    </>
  );
}

export default Home;
