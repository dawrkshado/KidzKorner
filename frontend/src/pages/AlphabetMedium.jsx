
import React, { useState } from "react";
import TopBar from "../components/TopBar";
import Back from "../components/Back";
import medalphabutton1 from "../assets/Alphabets/medalphabutton1.png";
import medalphabutton2 from "../assets/Alphabets/medalphabutton2.png";
import tutorialVideo from "../assets/videos/AlphabetMediumTutorial.mp4"; // ✅ Video path
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function AlphabetMedium() {
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
          // 🎮 After video ends — show the AlphabetMedium menu
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
                src="/Bg/Alphabets/alphabetmediumbg.webp"
                alt="Medium game background"
                className="w-full"
              />

              <Link to="/alphabets/medium/level1">
                <img
                  src={medalphabutton1}
                  alt="Button to go to Level1"
                  className="absolute left-[29%] top-[54%] w-auto cursor-pointer h-auto"
                />
              </Link>
              <Link to="/alphabets/medium/level2">
                <img
                  src={medalphabutton2}
                  alt="Button to go to Level2"
                  className="absolute left-[67%] top-[65%] w-auto cursor-pointer h-auto"
                />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

}

export default AlphabetMedium;