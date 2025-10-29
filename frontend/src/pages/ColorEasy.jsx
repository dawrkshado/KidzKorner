
import React, { useState } from "react";

import TopBar from "../components/TopBar";
import Back from "../components/Back";
import easycolorl1 from "../assets/color/easycolorl1.png";
import easycolorl2 from "../assets/color/easycolorl2.png";
import easycolorl3 from "../assets/color/easycolorl3.png";
import tutorialVideo from "../assets/videos/ColordEasyTutorial.mp4"; // ✅ Video path
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function ColorEasy() {
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
          // 🎨 After video ends — show the ColorEasy menu
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full"
          >
            <div className="hidden w-full md:inline md:absolute h-auto">
              <TopBar />
              <Back />
              <img
                src="/Bg/Color/easycolor.webp"
                alt="Easy game background"
                className="w-full"
              />

              <Link to={"/color/easy/level1"}>
                <img
                  src={easycolorl1}
                  alt="Button for Level 1 Color"
                  className="absolute left-[30%] top-[30%] w-auto cursor-pointer h-auto"
                />
              </Link>

              <Link to={"/color/easy/level2"}>
                <img
                  src={easycolorl2}
                  alt="Button for Level 2 Color"
                  className="absolute left-[50%] top-[50%] w-auto cursor-pointer h-auto"
                />
              </Link>

              <Link to={"/color/easy/level3"}>
                <img
                  src={easycolorl3}
                  alt="Button for Level 3 Color"
                  className="absolute left-[70%] top-[30%] w-auto cursor-pointer h-auto"
                />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ColorEasy;
