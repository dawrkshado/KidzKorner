
import Back from "../components/Back";
import bg from "../assets/Parents/registrationBg.png"
import { useEffect,useState } from "react";


function ParentsChildRegistration() {
const clearForm = () => {
  document.getElementById('First_Name').value ='';
  document.getElementById('Last_Name').value ='';
}


  
  return <>

  <Back/>
  <div className="h-screen w-full flex items-center justify-center bg-cover bg-no-repeat bg-center absolute" style={{backgroundImage:`url(${bg})`}}>


 <div className="bg-amber-300 absolute h-[50%] w-[50%]">
      <form action="">
        <div className="pb-4">
          <label >
              First Name: <input name="First_Name" id="First_Name" className="bg-white border-1" />
          </label>

        </div>

        <div>      
          <label>
              Last Name: <input name="Last_Name" id="Last_Name"  className="bg-white border-1"/>
          </label>
              <div className="flex gap-4">
                <button>Register</button>
                <button onClick={clearForm}>Clear</button>
              </div>
            
        </div>
      </form>
    </div>
  </div>

   
  </>;
}

export default ParentsChildRegistration;