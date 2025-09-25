import { Link } from 'react-router-dom'
`~`
import Menu from '../assets/Menu.png';
import Logo from '../assets/Logo1.png';


function TopBar(){
  return(
    <>
    <div className="font-[coiny]">
      <div className="w-full h-[3.125rem] bg-[#3DA8CC] flex justify-between items-center">
        <div className="ml-[1%]"><Link to="/"><img  src={Logo} alt="Logo"/></Link></div>
        <div className="invisible lg:visible flex  w-[15%] justify-center gap-x-[10%] text-[90%] text-white">
          <Link to="/"><p className="hover:text-amber-300">Home</p></Link>
          <Link to="/login"><p className="hover:text-amber-300">Login</p></Link>
          <Link to="/about" className="hover:text-amber-300"><p>About</p></Link>
          <Link to="/teacher"><p>Teacher</p></Link>
          
        </div>
        <div className="mr-[1%]"><img src={Menu} alt="Menu button" /></div>
        </div>
     </div>
    </>
  )
}
export default TopBar