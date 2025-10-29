import React, { useState } from "react";
import { Link } from "react-router-dom";
import Medium1 from "../assets/Shapes/ShapesMedium/level1.webp";
import Medium2 from "../assets/Shapes/ShapesMedium/level2.webp";
import Back from "../components/Back";
import TopBar from "../components/TopBar";
import tutorialVideo from "../assets/videos/ShapesMediumTutorial.mp4"; // ✅ Add your tutorial video
import { motion, AnimatePresence } from "framer-motion";

function ShapesMedium() {
  const [showTutorial, setShowTutorial] = useState(true);

  const handleVideoEnd = () => {
    setShowTutorial(false);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {showTutorial ? (
          // 🎬 Tutorial Video Section
          <motion.div
            key="tutorial"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center w-full h-full bg-gray"
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
          // 🟢 Main Level Selection Screen
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute overflow-y-hidden h-full w-full"
          >
            <TopBar />
            <Back />
            <img
              src="/Bg/Shapes/shapesMediumBg.webp"
              alt="Shapes Medium background"
              className="w-[100vw]"
            />

            <Link to="level1">
              <img
                src={Medium1}
                alt="Button for level 1"
                className="absolute left-[30%] bottom-0 h-[45%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000"
              />
            </Link>

            <Link to="level2">
              <img
                src={Medium2}
                alt="Button for level 2"
                className="absolute left-[70%] bottom-0 h-[75%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000"
              />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ShapesMedium;
