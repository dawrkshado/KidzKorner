import CreateUserBG from "../assets/Admin/CreateUSER.webp"

function CreateAcc(){

  return<>
    <div  className="flex justify-center items-center h-[100vh] w-[100wh] bg-cover" style={{backgroundImage:`url(${CreateUserBG})`}}>
       <div className="bg-amber-300 p-5 rounded-2xl shadow-lg flex flex-col items-center justify-center gap-4 w-[400px]">
          <h2 className="text-xl font-bold ">Register Child</h2>
          <form className="w-full">
            <div className="m-3">
              <label className="block mb-1">First Name:</label>
              <input
                required
      
                onChange={
                  (e) => {
                    const value = e.target.value;
                    const capitalized = value.charAt(0).toUpperCase() + value.slice(1);
                    setFirstName(capitalized);
                  }

                }
                className="w-full p-2 rounded-md border capitalize"
              />
            </div>

            <div className="m-3">
              <label className="block mb-1">Last Name:</label>
              <input
      
                required
                type="text"
          
                onChange={(e) => {
                const value = e.target.value;
                const capitalized = value.charAt(0).toUpperCase() + value.slice(1);
                setLastName(capitalized);
                }}
                className="w-full p-2 rounded-md border capitalize"
              />
            </div>

            <div className="m-3">
                  <label className="block mb-1">User Name</label>
                  <input
                    required
                    type="text"
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="w-full p-2 rounded-md border"
                  />
                </div>

                <div className="m-3">
                  <label className="block mb-1">User Name</label>
                  <input
                    required
                    type="text"
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="w-full p-2 rounded-md border"
                  />
                </div>

            <div className="m-3">
              <label className="block mb-1">Email</label>
              <input
                required
                type="text"
                placeholder="name@test.com"
                onChange={(e) => setSection(e.target.value)}
                className="w-full p-2 rounded-md border "
              />
            </div>


              <div className="m-3">
                  <label className="block mb-1">Phone Number</label>
                  <input type="tel"  
                  placeholder="Enter phone number" 
                  className="w-full p-2 rounded-md border"></input>
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
      
                className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400"
              >
                Clear
              </button>
            </div>
          </form>

          
        </div>
    </div>
  </>

}
export default CreateAcc;