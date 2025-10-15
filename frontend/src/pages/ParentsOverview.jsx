import Back from '../components/Back';
import alphabetButton from "../assets/Parents/alphabet.webp"
import colorButton from "../assets/Parents/color.webp"
import shapeButton from "../assets/Parents/shapes.webp"
import numberButton from "../assets/Parents/number.webp"
import { useState } from 'react';
import popUp from "../assets/Parents/showsUp.webp"

function ParentsOverview(){
  const [Clicked, setClicked] = useState(false);
  
  const handleClick = () => {
    setClicked(true);
  }
  const handleClose = () => {
    setClicked(false);
  }

  return (
    <>
      <Back/>
      <div className="hidden md:flex md:absolute items-center justify-center h-screen w-screen bg-cover bg-no-repeat" style={{backgroundImage:`url("./Bg/parentsoverviewbg.png")`}}>

        <div className='h-[100vh] w-fit items-center justify-center'>
          <img src={alphabetButton} onClick={handleClick} alt="Alphabet Button for Parents" className=" cursor-pointer"/>
          <img src={colorButton} onClick={handleClick} alt="Color Button for Parents" className=" cursor-pointer"/>
          <img src={shapeButton} onClick={handleClick} alt="Shape Button for Parents" className=" cursor-pointer"/>
          <img src={numberButton} onClick={handleClick} alt="Number Button for Parents" className=" cursor-pointer"/> 
        </div>
        

        {Clicked && (
          <div className='flex justify-center items-center h-fit w-fit absolute  '>
            <img 
            src={popUp} 
            alt="Pop up" 
            className=" w-[85%]"
          /> 

          <div className='h-fit w-fit bg-amber-600 absolute  top-0 z-10 ' onClick={handleClose}><h1 className='text-3xl'>X</h1></div>
          </div>
          
        
        )}
      </div>
    </>
  )
}

export default ParentsOverview;