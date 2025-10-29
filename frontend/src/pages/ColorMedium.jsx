
import React, { useState } from "react";

import TopBar from "../components/TopBar";
import Back from "../components/Back";
import avebutton1 from "../assets/color/avebutton1.png";
import avebutton2 from "../assets/color/avebutton2.png";
import tutorialVideo from "../assets/videos/ColorsMediumTutorial.mp4";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function ColorMedium() {
  const [showTutorial, setShowTutorial] = useState(true);

  const handleVideoEnd = () => {
    setShowTutorial(false);
  };

  return (
    <div className="relative w-full h-screen bg-green-100 overflow-hidden">
      <AnimatePresence mode="wait">
        {showTutorial ? (
         
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
          // 🎨 Main Medium Color Level Menu
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
                src="/Bg/Color/averagecolorbg.webp"
                alt="Medium game background"
                className="w-full"
              />

              <Link to={"/color/medium/level1"}>
                <img
                  src={avebutton1}
                  alt="Button for Level 1 Color"
                  className="absolute left-[40%] top-[30%] w-auto cursor-pointer h-auto"
                />
              </Link>

              <Link to={"/color/medium/level2"}>
                <img
                  src={avebutton2}
                  alt="Button for Level 2 Color"
                  className="absolute left-[60%] top-[50%] w-auto cursor-pointer h-auto"
                />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ColorMedium;
