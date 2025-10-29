import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hard1 from "../assets/Shapes/ShapesHard/level1.webp";
import tutorialVideo from "../assets/videos/ShapesHardTutorial.mp4"; // ✅ Add your tutorial video
import { motion, AnimatePresence } from "framer-motion";

function ShapesHard() {
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
            className="flex justify-center items-center w-full h-full bg-pink"
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
          // 🟢 Main Game Selection Screen
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute overflow-y-hidden h-full w-full"
          >
            <img
              src="/Bg/Shapes/shapesHardBg.webp"
              alt="Shapes Hard background"
              className="w-[100vw]"
            />

            <Link to="level1">
              <img
                src={Hard1}
                alt="Button for Level 1"
                className="absolute left-[50%] bottom-0 h-[60%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000"
              />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ShapesHard;
