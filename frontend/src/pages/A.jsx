import 'react-router-dom'

import arec from '../assets/Alphabets/arec.mp4'

function A() {
  return (
    <>
   
       <div className="hidden w-full md:inline md:absolute h-[100%]">
    
        <img src="./Bg/Alphabets/alphabetsabcd.webp" alt="ABCD Background" className="w-full"/>


        <div className="absolute inset-0 flex justify-center items-center z-10">
          <video
            src={arec}
            loop
            controls
            className="absolute top-[13%] left-[0%] w-[68%] h-[75%] rounded-2xl "
          />
        </div>
      </div>
    </>
  )
}

export default A
