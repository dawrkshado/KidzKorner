import Back from "../components/Back"
import Easy1 from "../assets/Shapes/ShapesEasy/Easy1.webp"
import Easy2 from "../assets/Shapes/ShapesEasy/Easy2.webp"
import Easy3 from "../assets/Shapes/ShapesEasy/Easy3.webp"
import TopBar from "../components/TopBar"
import { Link } from 'react-router-dom'
import { useState,useEffect } from "react";
import backgroundMusic from "../assets/Sounds/background.mp3"; 
import useSound from 'use-sound';
import clickSfx from '../assets/Sounds/button_click.mp3';


const getProgress = () => {
  return JSON.parse(localStorage.getItem("shapesEasyProgress")) || {
    level1: false,
    level2: false,
    level3: false,
  };
};

const saveProgress = (level) => {
  const progress = getProgress();
  progress[level] = true;
  localStorage.setItem("shapesEasyProgress", JSON.stringify(progress));
};

function ShapesEasy(){
const [playClick] = useSound(clickSfx, { volume: 0.5 });
const [showResetModal, setShowResetModal] = useState(false);
const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [progress, setProgress] = useState({
    level1: false,
    level2: false,
    level3: false,
  });
 useEffect(() => {
    setProgress(getProgress());
  }, []);
  const canPlayLevel2 = progress.level1;
  const canPlayLevel3 = progress.level2;

   useEffect(() => {
               const bgSound = new Audio(backgroundMusic);
                bgSound.loop = true;
                bgSound.volume = 0.2; 
        
                bgSound.play().catch((err) => {
                    console.log("Autoplay blocked. User must interact to enable sound.", err);
                });
        
                return () => {
                    bgSound.pause();
                    bgSound.currentTime = 0;
                };
            }, []); 

            const levels = [
    { id: "level1", image: Easy1, left: "15%", bottom: "6%" },
    { id: "level2", image: Easy2, left: "42%", bottom: "40%" },
    { id: "level3", image: Easy3, left: "65%", bottom: "6%" },
  ];

const isUnlocked = (index) => {
  if (index === 0) return true; // first level always unlocked
  return progress[`level${index}`] === true; // unlock next if previous done
};
    const handleResetConfirmed = () => {

    setShowResetModal(false);
    playClick();

 const resetState = {
level1: false,
 level2: false,
};

 setProgress(resetState);
saveProgress(resetState);
setShowSuccessToast(true);

    setTimeout(() => {
        setShowSuccessToast(false);
    }, 3000); 
  };

 const promptReset = () => {
 playClick(); 
    setShowResetModal(true); 
 };

  return( 
    <>
   <div className="absolute flex justify-around overflow-y-hidden h-[100vh] w-[100vw]">
        <div className="absolute top-0 left-0 w-full z-10">
          <TopBar />
        </div>
        <div className="absolute top-12.5 left-0 h-15 w-30 z-10">
          <Back />
        </div>

            <div className="absolute top-[5px] left-[1350px] z-20">
            <button 
                onClick={promptReset} 
                className="bg-green-500 hover:bg-red-700 text-white py-2 px-4 rounded-full shadow-lg transition duration-150 ease-in-out transform hover:scale-105"
                title="Reset all level progress"
            >
                🔄 Reset Game
            </button>
        </div>
        
        {showResetModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-8 rounded-xl shadow-2xl max-w-sm w-full transform transition-all scale-100 duration-300">
                    <h2 className="text-xl text-green-600 mb-4">Reset Game Confirmation</h2>
                    <p className="mb-6 text-gray-700">
                        Are you sure you want to reset the game?
                    </p>
                    <div className="flex justify-end space-x-3">
                        <button
                            onClick={() => { setShowResetModal(false); playClick(); }}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-gray-400 transition"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleResetConfirmed} 
                            className="px-4 py-2 bg-green-500 text-white rounded-lg transition"
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        )}
        {showSuccessToast && (
            <div className="fixed top-20 right-5 z-50">
                <div className="bg-red-500 text-white p-4 rounded-lg shadow-xl flex items-center space-x-3 transition-opacity duration-300">
                    <span className="text-2xl">🎉</span>
                    <p>Game progress has been reset!</p>
                </div>
            </div>
        )}


        <img
          src="/Bg/Shapes/shapesEasyBg.webp"
          alt=""
          className="h-[100vh] w-[100vw] absolute"
        />

      
        {levels.map((lvl, index) => {
          const unlocked = isUnlocked(index);
          const done = progress[lvl.id];

          return (
            <div key={lvl.id}>
              {unlocked ? (
                <Link to={lvl.id} onClick={playClick}>
                  <img
                    src={lvl.image}
                    alt={`Button to go to ${lvl.id}`}
                    className="absolute h-[40%] w-[20%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000"
                    style={{ left: lvl.left, bottom: lvl.bottom }}
                  />
                  {done && (
                    <span
                      className="absolute text-4xl text-green-500 font-bold"
                      style={{
                        left: `calc(${lvl.left} + 10%)`,
                        bottom: `calc(${lvl.bottom} + 35%)`,
                      }}
                    >
                      ✅
                    </span>
                  )}
                </Link>
              ) : (
                <div
               className="absolute opacity-40 cursor-not-allowed"

style={{ 
                    left: lvl.left, 
                    bottom: lvl.bottom, 
                    width: lvl.w, 
                    height: lvl.h 
                }} 
 >
 <img 
src={lvl.image} 
 alt={`Locked ${lvl.id}`} 
          
                  className="h-full w-full" 
/>
 <span
 className="absolute text-6xl text-gray-600 font-bold"
 style={{
 left: `50%`,
top: `50%`,
 transform: "translate(-50%, -50%)", 
 }}
 > 🔒
 </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ShapesEasy;