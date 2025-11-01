import Back from "../components/Back"
import easyalphabutton1 from "../assets/Alphabets/easyalphabutton1.png";
import easyalphabutton2 from "../assets/Alphabets/easyalphabutton2.png";
import easyalphabutton3 from "../assets/Alphabets/easyalphabutton3.png";

import useSound from 'use-sound';
import clickSfx from '../assets/Sounds/button_click_sound.mp3'; 
import { useState,useEffect } from "react";
import backgroundMusic from "../assets/Sounds/background.mp3"; 

import { Link } from 'react-router-dom'

const PROGRESS_KEY = 'alphabetEasyProgress'; 

const getProgress = () => {
 return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {
level1: false,
 level2: false, 
 level3: false, 
 };
};

const saveProgress = (newProgress) => {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(newProgress));
};

function AlphabetEasy(){
 const [progress, setProgress] = useState(getProgress());
 const [playClick] = useSound(clickSfx, { volume: 0.5 });

    const [showResetModal, setShowResetModal] = useState(false);
    const [showSuccessToast, setShowSuccessToast] = useState(false);


useEffect(() => {
setProgress(getProgress());
 }, []);

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
        { id: "level1", image: easyalphabutton1, path: "/alphabets/easy/level1", left: "45%", top: "75%" }, // Adjusted for Level 1
        { id: "level2", image: easyalphabutton2, path: "/alphabets/easy/level2", left: "55%", top: "45%" }, // Adjusted for Level 2
        { id: "level3", image: easyalphabutton3, path: "/alphabets/easy/level3", left: "40%", top: "15%" }, // Adjusted for Level 3
    ];

const isUnlocked = (index) => {
 if (index === 0) return true;

const previousLevelId = levels[index - 1].id; 

 return progress[previousLevelId] === true;
};

    const handleResetConfirmed = () => {
        setShowResetModal(false);
        playClick();

        const resetState = {
            level1: false,
            level2: false,
            level3: false,
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

 const renderLevelButton = (lvl, index) => {
 const unlocked = isUnlocked(index);
 const isCompleted = progress[lvl.id];

 const baseClasses = "absolute w-auto cursor-pointer h-auto";

 if (unlocked) {
 return (
 <Link to={lvl.path} onClick={playClick} key={lvl.id}>
<img 
 src={lvl.image} 
 alt={`Button to go to ${lvl.id}`} 
 className={`${baseClasses} left-[${lvl.left}] top-[${lvl.top}]`}
 />
{isCompleted && (
 <span className="absolute text-4xl font-bold text-green-500 z-10"
 style={{ left: `calc(${lvl.left} + 10%)`, top: `calc(${lvl.top} + 20%)` }}>
 ✅
 </span>
 )}
</Link>
);
} else {
 return (
 <div 
key={lvl.id} 
 onClick={() => { playClick(); alert(`Complete Level ${index + 1} to unlock Level ${index + 2}!`); }}
 className={`opacity-40 cursor-not-allowed ${baseClasses} left-[${lvl.left}] top-[${lvl.top}]`}
 >
 <img 
 src={lvl.image} 
 alt={`${lvl.id} is locked`} 
 className="w-full h-full"
/>
 <span className="absolute text-4xl font-bold text-gray-700"
 style={{ 
 left: '50%', 
 top: '50%', 
 transform: 'translate(-50%, -50%)' 
 }}>
 🔒
</span>
</div>
 );
 }
};


 return(
 <>
 <div className="hidden w-full md:inline md:absolute h-auto">
 <Back/>
                
                <div className="absolute top-[5px] right-[50px] z-20"> 
                    <button 
                        onClick={promptReset} 
                        className="bg-green-500 hover:bg-red-700 text-white py-2 px-4 rounded-full shadow-lg transition duration-150 ease-in-out transform hover:scale-105"
                        title="Reset all level progress"
                    >
                        🔄 Reset Game
                    </button>
                </div>

 <img 
 src="./Bg/Alphabets/alphabeteasybg.webp" 
alt="Easy game background" 
 className="w-full"
 />

{levels.map((lvl, index) => renderLevelButton(lvl, index))}

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
                            <p>Alphabet Easy progress has been reset!</p>
                        </div>
                    </div>
                )}
    </div>
    </>
   )
  }

export default AlphabetEasy;