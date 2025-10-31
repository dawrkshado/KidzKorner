import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
import Back from "../components/Back"
function Lessons(){
<Helmet>
  <title>Lessons | KidzKorner</title>
  <meta name="Lessons that can be used after class" content="Different buttons for different lessons" />
</Helmet>

  return(<>
   <div className="place-self-start"><Back/></div>
    <div className="flex h-[100vh] w-[100vw] justify-center items-center">

      <div className="h-[90%] w-[90%]  grid grid-flow-col grid-rows-2 gap-15 [&>*]:content-center [&>*]:text-center [&>*]:rounded-2xl">
       <Link to="animals">
        <div className="bg-pink-300 h-[100%]"> Animal </div>
       </Link>
        
        <div className="bg-orange-400  h-[100%]"> Action Words</div>
        <div className="bg-yellow-300  h-[100%]"> Weather </div>
        <div className="bg-red-600  h-[100%]"> 5 Senses</div>


      </div>
    </div>
  </>)

}
export default Lessons