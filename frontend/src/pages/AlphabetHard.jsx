
import React, { useState } from "react";
import TopBar from "../components/TopBar";
import Back from "../components/Back";
import hardalphabutton1 from "../assets/Alphabets/hardalphabutton1.png";
import tutorialVideo from "../assets/videos/AlphabetHardTutorial.mp4"; // ✅ Add the tutorial video path here
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";



import 'react-router-dom'

function AlphabetHard() {
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
          // 🎮 After tutorial ends — show the Hard menu screen
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
                src="/Bg/Alphabets/alphabethardbg.webp"
                alt="Hard game background"
                className="w-full"
              />
              <Link to="/alphabets/hard/level1">
                <img
                  src={hardalphabutton1}
                  alt="Button to go to Level1"
                  className="absolute left-[42%] top-[54%] w-auto cursor-pointer h-auto"
                />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

}

export default AlphabetHard;
