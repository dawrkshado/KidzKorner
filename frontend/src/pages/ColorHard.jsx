import React, { useState } from "react";
import TopBar from "../components/TopBar";
import Back from "../components/Back";
import hardbuttoncolor from "../assets/color/hardbuttoncolor.png";
import tutorialVideo from "../assets/videos/ColorsHardTutorial.mp4"; // ✅ Tutorial video path
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function ColorHard() {
  const [showTutorial, setShowTutorial] = useState(true);

  const handleVideoEnd = () => {
    setShowTutorial(false);
  };

  return (
    <div className="relative w-full h-screen bg-green-100 overflow-hidden">
      <AnimatePresence mode="wait">
        {showTutorial ? (
          // 🎬 Tutorial video section
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
          // 🎨 Main Hard Color Game Menu
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
                src="/Bg/Color/hardcolorbg.webp"
                alt="Hard game background"
                className="w-full"
              />

              <Link to={"/color/hard/level1"}>
                <img
                  src={hardbuttoncolor}
                  alt="Button for Level 1 Color"
                  className="absolute left-[50%] top-[30%] w-auto cursor-pointer h-auto"
                />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ColorHard;
