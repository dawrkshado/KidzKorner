// ✅ NumberGameEasy1.jsx — Updated & Correct ✅
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import { motion } from "framer-motion";
import { useWithSound } from "../components/useWithSound";

import bg from "../assets/Number/Easy/bglvl2.webp";
import wrongImage from "../assets/Alphabets/Hard/cross.gif";

import one from "../assets/Number/Easy/One.webp";
import two from "../assets/Number/Easy/two.webp";
import three from "../assets/Number/Easy/three.webp";
import four from "../assets/Number/Easy/four.webp";
import five from "../assets/Number/Easy/five.webp";

import OneStar from "../assets/Done/OneStar.webp";
import TwoStar from "../assets/Done/TwoStar.webp";
import ThreeStar from "../assets/Done/ThreeStar.webp";

import ReplayNBack from "../components/ReplayNBack";
import backgroundMusic from "../assets/Sounds/background.mp3";
import applause from "../assets/Sounds/applause.wav";
import wrongSfx from "../assets/Sounds/wrong_effect.mp3";

// ✅ Save progress for numbers easy mode
function saveProgress(level) {
  const progress = JSON.parse(localStorage.getItem("numbersEasyProgress")) || {
    level1: false,
    level2: false,
    level3: false,
  };
  progress[level] = true;
  localStorage.setItem("numbersEasyProgress", JSON.stringify(progress));
}

export default function NumberGameEasy1() {
  const [playWrong] = useSound(wrongSfx, { volume: 0.5 });
  const { playSound: playApplause, stopSound: stopApplause } =
    useWithSound(applause);

  const navigate = useNavigate();
  const [clicked, setClicked] = useState([]);
  const [showWrong, setShowWrong] = useState(false);
  const [count, setCount] = useState(0);

  const numbers = [
    { value: 1, img: one, top: 575, left: 395, width: 35, height: 35 },
    { value: 2, img: two, top: 450, left: 250, width: 25, height: 25 },
    { value: 3, img: three, top: 60, left: 70, width: 40, height: 40 },
    { value: 4, img: four, top: 80, left: 1090, width: 45, height: 45 },
    { value: 5, img: five, top: 490, left: 1150, width: 40, height: 40 },
  ];

  const isGameFinished = clicked.length === numbers.length;
  const nextExpectedValue = clicked.length + 1;

  const handleWrong = () => {
    playWrong();
    setShowWrong(true);
    setTimeout(() => setShowWrong(false), 900);
  };

  const handleNumberClick = (value, e) => {
    e.stopPropagation();
    if (clicked.includes(value) || isGameFinished) return;
    value === nextExpectedValue ? setClicked([...clicked, value]) : handleWrong();
  };

  const handleBackgroundClick = () => {
    if (!isGameFinished) handleWrong();
  };

  const resetGame = () => {
    setClicked([]);
    setCount(0);
    stopApplause();
    navigate(0);
  };

  // ✅ Timer
  useEffect(() => {
    if (isGameFinished) return;
    const time = setInterval(() => setCount((prev) => prev + 1), 1000);
    return () => clearInterval(time);
  }, [isGameFinished]);

  // ✅ Background Music
  useEffect(() => {
    const bgMusic = new Audio(backgroundMusic);
    bgMusic.loop = true;
    bgMusic.volume = 0.2;

    bgMusic.play().catch(() =>
      console.log("User interaction required for autoplay.")
    );

    return () => {
      bgMusic.pause();
      bgMusic.currentTime = 0;
    };
  }, []);

  // ✅ Save progress + Play victory sound
  useEffect(() => {
    if (!isGameFinished) return;
    playApplause();
    saveProgress("level1");

    const timeout = setTimeout(() => stopApplause(), 6000);
    return () => clearTimeout(timeout);
  }, [isGameFinished]);

  return (
    <div
      className="absolute w-[100vw] h-[100vh] font-[coiny]"
      onClick={handleBackgroundClick}
    >
      <img src={bg} className="absolute w-full h-full object-cover" />

      {/* ✅ Timer */}
      <div className="absolute top-4 right-4 text-white text-3xl z-10">
        Time: {count}s
      </div>

      {/* ✅ Numbers */}
      {numbers.map((num, i) => (
        <div
          key={i}
          className={`absolute cursor-pointer duration-300 ${
            num.value === nextExpectedValue && !isGameFinished
              ? "motion-safe:animate-pulse"
              : ""
          }`}
          style={{
            top: `${num.top / 12}vh`,
            left: `${num.left / 12}vw`,
          }}
          onClick={(e) => handleNumberClick(num.value, e)}
        >
          {!clicked.includes(num.value) && (
            <img
              src={num.img}
              style={{
                width: `${num.width / 1.5}vw`,
                height: `${num.height / 1.5}vh`,
              }}
              className="object-contain"
            />
          )}
        </div>
      ))}

      {/* ❌ Wrong effect */}
      {showWrong && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          <img src={wrongImage} className="h-[300px]" />
        </motion.div>
      )}

      {/* ✅ Game Completed Screen */}
      {isGameFinished && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 z-20">
          <motion.img
            src={
              count <= 10 ? ThreeStar : count <= 15 ? TwoStar : OneStar
            }
            className="h-[300px]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          />

          <div className="absolute bottom-[18%]">
            <ReplayNBack onReplay={resetGame} />
          </div>
        </div>
      )}
    </div>
  );
}
