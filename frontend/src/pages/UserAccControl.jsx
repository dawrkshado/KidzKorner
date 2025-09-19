import 'react-router-dom'
import TopBar from '../components/TopBar'
function UserAccControl(){
    return(
        <div className="hidden md:inline md:absolute h-scren w-screen overflow-hidden">
            <TopBar/>
            <img src="./Bg/bground.png" alt="background" className="w-full"/>
        </div>
    );


}
export default UserAccControl;