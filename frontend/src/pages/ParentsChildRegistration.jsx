import Back from "../components/Back";
import bg from "../assets/Parents/registrationBg.webp";
import { useState } from "react";
import api from "../api"; 
import { ACCESS_TOKEN } from "../constants"; 

function ParentsChildRegistration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState();
  const [section,setSection] = useState("");
   const [schedule,setSchedule] = useState("");

  
  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setBirthDate("");
    setSection("")
    setSchedule("")
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
        "/api/child_register/",
        {
          first_name: firstName,
          last_name: lastName,
          section: section,
          class_sched: schedule,
          birth_date: birthDate,

        },
      );
      setTimeout(() => setShowMessage(), 2000);
      setMessage("Child registered successfully!");
      setShowMessage(true)
      console.log(response.data);
      clearForm();
    } catch (error) {
      console.error(error);
      showMessage(false)
      if (error.response?.data?.error) {
        setMessage(` ${error.response.data.error}`);
      } else {
        showMessage(false)
        setMessage(" Something went wrong. Please try again.");
      }
    }
  };

  return (
    <>
      <Back />
      <div
        className="h-screen w-full flex items-center justify-center bg-cover bg-no-repeat bg-center absolute"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="bg-amber-300 p-10 rounded-2xl shadow-lg flex flex-col items-center justify-center gap-4 w-[400px]">
          <h2 className="text-xl font-bold mb-2">Register Child</h2>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="m-3">
              <label className="block mb-1">First Name:</label>
              <input
                required
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-2 rounded-md border"
              />
            </div>

            <div className="m-3">
              <label className="block mb-1">Last Name:</label>
              <input
                required
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-2 rounded-md border"
              />
            </div>

               <div className="m-3">
              <label className="block mb-1">Section:</label>
              <input
                required
                type="text"
                value={section}
                onChange={(e) => setSection(e.target.value)}
                className="w-full p-2 rounded-md border"
              />
            </div>

                <div className="m-3">
              <label className="block mb-1">Class Schedule</label>
              <select
                required
                value={schedule}
                onChange={(e) => setSchedule(e.target.value)}
                className="w-full p-2 rounded-md border"
              >
                  <option value="">-- Select Schedule --</option>
                  <option value="8:00 AM to 11:00 AM"> Morning: 8:00 AM to 11:00 AM</option>
                  <option value="8:00 AM to 11:00 AM"> Noon: 11:00 AM to 1:00 PM</option>
              </select>
            </div>

            <div className="m-3">
              <label className="block mb-1">Birthdate:</label>
              <input
                required
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full p-2 rounded-md border"
              />
            </div>

            <div className="flex gap-4 justify-center mt-4">
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                Register
              </button>
              <button
                type="button"
                onClick={clearForm}
                className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400"
              >
                Clear
              </button>
            </div>
          </form>

          {showMessage === true && <div className="absolute z-10 bg-green-400 opacity-90 rounded-2xl h-20 w-70 flex items-center justify-center"><p className="mt-4 text-lg font-semibold ">{message}</p></div>}
          {showMessage === false && <div className="absolute z-10 bg-red-500 rounded-2xl h-20 w-70 flex items-center justify-center"><p className="mt-4 text-lg font-semibold ">{message}</p></div>}
        </div>
      </div>
    </>
  );
}

export default ParentsChildRegistration;
