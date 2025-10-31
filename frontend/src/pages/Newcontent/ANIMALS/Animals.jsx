import {Helmet} from "react-helmet"
import { Link } from "react-router-dom"


function Animals(){
  <Helmet>
  <title>Animals | KidzKorner</title>
  <meta name="Lessons About animals" content="Will have lessons about animals that can further enhance their knowledge" />
</Helmet>


  return(<>
   
    <div className=" bg-gray-400 h-[100vh] justify-center place-items-center w-[100vw]">
       <div className="place-self-start"></div>
       <div className=" h-[20%] w-[50%] mb-50  z-10 text-center content-center">
          <h1 className="text-7xl">Animal Lesson</h1>
       </div>

       <div className="  content-center place-items-center ">

        <ul className="text-center">

          <li>
            <Link to="/lessons/animals/lesson1"> <div className="text-3xl hover:bg-amber-50 hover:cursor-pointer" >Lesson 1: Animal Sounds</div></Link>
           
          </li>

          <li>
             <Link to="/lessons/animals/lesson2"> <div className="text-3xl hover:bg-amber-50 hover:cursor-pointer">Lesson 2: Actions</div></Link>
           
          </li>

          <li>
             <Link to="/lessons/animals/lesson3"><div className="text-3xl hover:bg-amber-50 hover:cursor-pointer" >Lesson 3: Baby Animals</div></Link>
            
          </li>

          <li>
            <Link to="/lessons/animals/lesson4"><div className="text-3xl hover:bg-amber-50 hover:cursor-pointer" >Lesson 4: Habitats</div></Link>
            
          </li>

          <li>
            <Link to="/lessons/animals/lesson5"> <div className="text-3xl hover:bg-amber-50 hover:cursor-pointer" >Lesson 5: Pets and Wild Animals</div></Link>
           
          </li>

        </ul>
        
       </div>
      

    </div>
  </>)
  


}
export default Animals