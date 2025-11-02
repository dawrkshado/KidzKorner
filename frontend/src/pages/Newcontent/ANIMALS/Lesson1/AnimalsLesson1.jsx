import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import act1sound from "../../../../assets/Animals/act1sound.webp";
import act2sound from "../../../../assets/Animals/act2sound.webp";
import exercisesound from "../../../../assets/Animals/exercisesound.webp";
import activitysound from "../../../../assets/Animals/activitysound.webp";

import dogsound from "../../../../assets/Animals/ExerciseSound/dogsound.webp";
import catsound from "../../../../assets/Animals/ExerciseSound/catsound.webp";
import cowsound from "../../../../assets/Animals/ExerciseSound/cowsound.webp";
import ducksound from "../../../../assets/Animals/ExerciseSound/ducksound.webp";
import pigsound from "../../../../assets/Animals/ExerciseSound/pigsound.webp";

import dogbark from "../../../../assets/Sounds/dogbark.mp3";
import catmeow from "../../../../assets/Sounds/catmeow.mp3";
import cowmoo from "../../../../assets/Sounds/cowmoo.mp3";
import duckquack from "../../../../assets/Sounds/duckquack.mp3";
import pigoink from "../../../../assets/Sounds/pigoink.mp3";

import SoundVideo from "../../../../assets/Animals/ExerciseVideo/SoundVideo.mp4";

function AnimalLesson1() {
  const [clicked, setClicked] = useState(false);
  const [clickedID, setClickedID] = useState(null);
  const currentAudioRef = useRef(null);
  const videoRef = useRef(null); // ✅ ref for main video
  const navigate = useNavigate();

  // 🎵 Stop currently playing sound
  const stopSound = () => {
    const audio = currentAudioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      currentAudioRef.current = null;
    }
  };

  // 🎵 Play animal sounds
  const playSound = (soundFile) => {
    stopSound();
    const audio = new Audio(soundFile);
    currentAudioRef.current = audio;
    audio.volume = 1.0; // ✅ max sound for animal effects
    audio.play().catch((err) => console.error("Audio error:", err));

    audio.onended = () => {
      currentAudioRef.current = null;
    };
  };

  const handleClick = (button) => {
    stopSound();
    setClicked(true);
    setClickedID(button);
  };

  const handleExit = () => {
    stopSound();
    setClicked(false);
    setClickedID(null);
  };

  const handleNavigation = (path) => {
    stopSound();
    navigate(path);
  };

  // 🎬 Set video volume to max after mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 1.0; // ✅ maximum volume
    }
  }, []);

  // Cleanup audio when leaving page
  useEffect(() => {
    return () => stopSound();
  }, []);

  return (
    <>
      {/* 🟢 Main Page Section */}
      <div className="relative w-full min-h-screen overflow-y-auto">
        {/* Background */}
        <img
          src="/Bg/mainvidbg.webp"
          alt="Main background"
          className="w-full h-auto block"
        />

        {/* 🎬 Main Video (with MAX volume) */}
        <div className="absolute top-[10%] left-[30%] transform -translate-x-1/2 w-[48%]">
          <video
            ref={videoRef}
            src={SoundVideo}
            controls
            autoPlay
            loop
            className="rounded-2xl shadow-lg w-full"
          />
        </div>

        {/* 🟡 Buttons */}
        <div
          onClick={() => handleClick("Exercises")}
          className="hover:cursor-pointer absolute left-[61%] top-[15%]"
        >
          <img
            src={exercisesound}
            alt="Exercises Button"
            className="w-auto h-auto hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div
          onClick={() => handleClick("Activities")}
          className="hover:cursor-pointer absolute w-auto left-[60%] top-[41%]"
        >
          <img
            src={activitysound}
            alt="Activities Button"
            className="w-auto h-auto hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* 🟠 Exercises Popup */}
      {clicked && clickedID === "Exercises" && (
        <div
          className="fixed inset-0 z-50 flex flex-col justify-center items-center gap-10 bg-cover bg-center"
          style={{ backgroundImage: `url("/Bg/exerciseactivitysound.webp")` }}
        >
          <div
            onClick={handleExit}
            className="bg-red-600 absolute right-[3%] top-[3%] h-10 w-10 flex justify-center items-center text-white rounded-full cursor-pointer"
          >
            X
          </div>

          <div className="relative w-full h-[500px]">
            <img
              src={dogsound}
              alt="Dog"
              className="absolute top-[100%] left-[10%] hover:scale-105 transition-transform duration-300 cursor-pointer"
              style={{ transform: "translate(-50%, -50%)" }}
              onClick={() => playSound(dogbark)}
            />
            <img
              src={catsound}
              alt="Cat"
              className="absolute top-[67%] left-[20%] hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => playSound(catmeow)}
            />
            <img
              src={cowsound}
              alt="Cow"
              className="absolute top-[40%] left-[35%] hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => playSound(cowmoo)}
            />
            <img
              src={ducksound}
              alt="Duck"
              className="absolute top-[60%] left-[85%] hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => playSound(duckquack)}
            />
            <img
              src={pigsound}
              alt="Pig"
              className="absolute top-[50%] left-[60%] hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => playSound(pigoink)}
            />
          </div>
        </div>
      )}

      {/* 🟣 Activities Popup */}
      {clicked && clickedID === "Activities" && (
        <div
          className="fixed inset-0 z-50 flex flex-col justify-center items-center gap-10 bg-cover bg-center"
          style={{ backgroundImage: `url("/Bg/activitybg.webp")` }}
        >
          <div
            onClick={handleExit}
            className="bg-red-600 absolute right-[3%] top-[3%] h-10 w-10 flex justify-center items-center text-white rounded-full cursor-pointer"
          >
            X
          </div>
          <img
            src={act1sound}
            alt="Activity 1"
            onClick={() =>
              handleNavigation("/lessons/animals/lesson1/activity1")
            }
            className="w-auto hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
          <img
            src={act2sound}
            alt="Activity 2"
            onClick={() =>
              handleNavigation("/lessons/animals/lesson1/activity2")
            }
            className="w-auto hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        </div>
      )}
    </>
  );
}

export default AnimalLesson1;
