import React, { useState } from "react";
import TopBar from "../components/TopBar";
import Back from "../components/Back";
import ReplayNBack from "../components/ReplayNBack";
import numbereasy from "../assets/Number/numbereasy.png";
import numbermedium from "../assets/Number/numbermedium.png";
import numberhard from "../assets/Number/numberhard.png";
import tutorialVideo from "../assets/videos/NumberEasyTutorial.mp4"; // ✅ Add this file
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function NumberEasy() {
  const [showTutorial, setShowTutorial] = useState(true);

  const handleVideoEnd = () => {
    setShowTutorial(false);
  };

  return (
    <div className="relative w-full h-screen bg-green-100 overflow-hidden">
      <AnimatePresence mode="wait">
        {showTutorial ? (
          // 🎬 Tutorial video plays first
          <motion.div
            key="tutorial"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center w-full h-full"
          >
            <div className="relative w-[80%]">
              <video
                src={tutorialVideo}
                autoPlay
                onEnded={handleVideoEnd}
                className="rounded-2xl shadow-lg w-full border-4 border-gray-200"
              />
              <button
                onClick={handleVideoEnd}
                className="absolute top-4 right-4 bg-white/80 text-black font-semibold px-4 py-1 rounded-lg shadow hover:bg-white transition"
              >
                Skip
              </button>
            </div>
          </motion.div>
        ) : (
          // 🎮 After video ends — show the NumberGame menu
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full"
          >
            <div className="hidden w-full md:inline md:absolute overflow-x-hidden">
              <TopBar />
              <Back />
              <img
                src="/Bg/Number/numbergamebg.png"
                alt="background"
                className="w-full"
              />

              <Link to="/numbereasy">
                <img
                  src={numbereasy}
                  alt="Easy Button"
                  className="absolute left-[5%] top-[13%] h-[25%] cursor-pointer"
                />
              </Link>

              <Link to="/numbermedium">
                <img
                  src={numbermedium}
                  alt="Medium Button"
                  className="absolute left-[30%] top-[43%] w-auto h-[25%] cursor-pointer"
                />
              </Link>

              <Link to="/numberhard">
                <img
                  src={numberhard}
                  alt="Hard Button"
                  className="absolute left-[55%] top-[73%] w-auto h-[25%] cursor-pointer"
                />
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NumberEasy;
