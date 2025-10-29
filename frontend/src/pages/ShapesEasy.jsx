import React, { useState } from "react";
import Back from "../components/Back";
import Easy1 from "../assets/Shapes/ShapesEasy/Easy1.webp";
import Easy2 from "../assets/Shapes/ShapesEasy/Easy2.webp";
import Easy3 from "../assets/Shapes/ShapesEasy/Easy3.webp";
import TopBar from "../components/TopBar";
import tutorialVideo from "../assets/videos/ShapesEasyTutorial.mp4"; // ✅ Tutorial video path
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function ShapesEasy() {
  const [showTutorial, setShowTutorial] = useState(true);

  const handleVideoEnd = () => {
    setShowTutorial(false);
  };

  return (
    <div className="relative w-full h-screen bg-green-100 overflow-hidden">
      <AnimatePresence mode="wait">
        {showTutorial ? (
          // 🎬 Tutorial Video Section
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
          // 🟢 Main ShapesEasy Level Selection Screen
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute flex justify-around overflow-y-hidden h-[100vh] w-[100vw]"
          >
            <div className="absolute top-0 left-0 w-full z-10">
              <TopBar />
            </div>
            <div className="absolute top-12.5 left-0 h-15 w-30 z-10">
              <Back />
            </div>

            <img
              src="/Bg/Shapes/shapesEasyBg.webp"
              alt="Shapes Easy background"
              className="h-[100vh] w-[100vw] absolute"
            />

            <Link to="level1">
              <img
                src={Easy1}
                alt="Button to go to Level1"
                className="absolute h-[40%] w-[20%] left-[15%] bottom-[6%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000"
              />
            </Link>

            <Link to="level2">
              <img
                src={Easy2}
                alt="Button to go to Level2"
                className="absolute h-[40%] w-[20%] left-[42%] bottom-[40%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000"
              />
            </Link>

            <Link to="level3">
              <img
                src={Easy3}
                alt="Button to go to Level3"
                className="absolute h-[40%] w-[20%] left-[65%] bottom-[6%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000"
              />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ShapesEasy;
  