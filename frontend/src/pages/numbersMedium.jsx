
import React, { useState } from "react";

import TopBar from "../components/TopBar";
import Back from "../components/Back";
import mednumberl1 from "../assets/Number/mednumberl1.png";
import mednumberl2 from "../assets/Number/mednumberl2.png";
import tutorialVideo from "../assets/videos/NumberMediumTutorial.mp4";  // ← your video file path
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function NumbersMedium() {
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
                muted
                playsInline
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
          // 🎮 Menu with level buttons
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full"
          >
            <div className="w-full absolute h-auto">
              <TopBar />
              <Back />
              <img
                src={require("../assets/Bg/Number/mediumnumberbg.png")}
                alt="Number medium game background"
                className="w-full"
              />

              <Link to={"/number/medium/level1"}>
                <img
                  src={mednumberl1}
                  alt="Button for Level 1 Number"
                  className="absolute left-[20%] top-[50%] w-auto cursor-pointer h-auto"
                />
              </Link>

              <Link to={"/number/medium/level2"}>
                <img
                  src={mednumberl2}
                  alt="Button for Level 2 Number"
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

export default NumbersMedium;
