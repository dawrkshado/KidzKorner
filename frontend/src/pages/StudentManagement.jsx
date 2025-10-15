import 'react-router-dom'

import TopBar from '../components/TopBar'
import Back from '../components/Back';
function StudentManagement(){
    return(

        <div className="hidden md:inline md:absolute   overflow-x-hidden">
            <Back/>

            <img src="./Bg/bground.png" alt="background" className="w-full"/>
        </div>
    );


}
export default StudentManagement;