import 'react-router-dom'
import TopBar from '../components/TopBar'
import Back from '../components/Back';
import api from '../api';
function DashBoard(){
    

    return(
        <div className="hidden md:inline md:absolute h-screen w-screen overflow-x-hidden">
            <Back/>
            <img src="./Bg/bground.png" alt="background" className="w-full"/>
        </div>
    );


}
export default DashBoard;