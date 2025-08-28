import { Link } from 'react-router-dom'
import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";




function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
      e.preventDefault()
    }

    
  return(
<>
  <div className="absolute w-full h-screen text-[0.9rem] font-[coiny] lg:text-xl">
      <img src="./Bg/Bg.webp" alt="Background Image" className="w-full h-screen"/>


    <form onSubmit={handleSubmit}>
      <div className="absolute w-[25%] h-[25%] content-center text-center transform -translate-x-1/2 bottom-[15%] left-[51%]">
      

        <div className="flex justify-around items-center text-white w-[100%]">
          <label for="username" >User Name:</label>
          <input type="text" id="username" name="username" required className=" overflow-hidden resize-none w-[55%] h-[25px] md:h-[25px] px-4 p-[5%] rounded-[10px] bg-[#3DA8CC]"></input>
        </div> 
        <br />
        <div className="text-[100%]  flex justify-around items-center font-[coiny] text-white w-[100%]">
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required className=" overflow-hidden resize-none w-[55%] h-[25px] md:h-[25px] px-4 p-[5%] rounded-[10px] bg-[#3DA8CC]"></input>
        </div>
        
        <button className=" mt-[2%] lg:mt-[10%] rounded-[20px] h-[30%] w-[40%] md:h-[25%] bg-white transition-all duration-300 ease-in-out active:opacity-20 hover:scale-[120%] hover:cursor-pointer">Log In</button>
      </div>
    </form>
  </div>
</>
)

}
  export default Login