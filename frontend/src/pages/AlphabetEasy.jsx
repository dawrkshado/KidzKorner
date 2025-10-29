import React, { useState } from "react";
import TopBar from "../components/TopBar";
import Back from "../components/Back";
import easyalphabutton1 from "../assets/Alphabets/easyalphabutton1.png";
import easyalphabutton2 from "../assets/Alphabets/easyalphabutton2.png";
import easyalphabutton3 from "../assets/Alphabets/easyalphabutton3.png";
import tutorialVideo from "../assets/videos/AlphabetEasyTutorial.mp4"; // ✅ Video path
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function AlphabetEasy() {
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
          // 🎮 After video ends — show the AlphabetEasy menu
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
                src="/Bg/Alphabets/alphabeteasybg.webp"
                alt="Easy game background"
                className="w-full"
              />

              <Link to={"/alphabets/easy/level1"}>
                <img
                  src={easyalphabutton1}
                  alt="Button for Level 1 Alphabet"
                 className="absolute left-[40%] top-[70%] w-auto cursor-pointer h-auto"
                />
              </Link>


              <Link to={"/alphabets/easy/level2"}>
                <img
                  src={easyalphabutton2}
                  alt="Button for Level 2 Alphabet"
                  className="absolute left-[55%] top-[48%] w-auto cursor-pointer h-auto"
                />
              </Link>

              <Link to={"/alphabets/easy/level3"}>
                <img
                  src={easyalphabutton3}
                  alt="Button for Level 3 Alphabet"
                 className="absolute left-[40%] top-[10%] w-auto cursor-pointer h-auto"
                />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

}
export default AlphabetEasy;
