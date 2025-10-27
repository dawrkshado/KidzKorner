import A from "../assets/Alphabets/A.webp";
import B from "../assets/Alphabets/B.webp";
import C from "../assets/Alphabets/C.webp";
import D from "../assets/Alphabets/D.webp";
import E from "../assets/Alphabets/E.webp";
import F from "../assets/Alphabets/F.webp";
import G from "../assets/Alphabets/G.webp";
import H from "../assets/Alphabets/H.webp";
import I from "../assets/Alphabets/I.webp";
import J from "../assets/Alphabets/J.webp";
import K from "../assets/Alphabets/K.webp";
import L from "../assets/Alphabets/L.webp";
import M from "../assets/Alphabets/M.webp";
import N from "../assets/Alphabets/N.webp";
import O from "../assets/Alphabets/O.webp";
import P from "../assets/Alphabets/P.webp";
import Q from "../assets/Alphabets/Q.webp";
import R from "../assets/Alphabets/R.webp";
import S from "../assets/Alphabets/S.webp";
import T from "../assets/Alphabets/T.webp";
import U from "../assets/Alphabets/U.webp";
import V from "../assets/Alphabets/V.webp";
import W from "../assets/Alphabets/W.webp";
import X from "../assets/Alphabets/X.webp";
import Y from "../assets/Alphabets/Y.webp";
import Z from "../assets/Alphabets/Z.webp";
import Back from "../components/Back";
import colorbutton from "../assets/Color/colorbutton.png"

import { Link } from 'react-router-dom'


function Alphabets(){   
    return(
<>  
            <Back/>
<div className="hidden w-full md:inline md:absolute h-[100%]">
        <img src="./Bg/Alphabets/alphabetbg.webp" alt="chalkBoard Background" className="w-full"/>
   <Link to="/A">
       <img src={A} alt="Button A" className="absolute top-[7%] left-[-3%] bottom-[43%] h-[21%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000" />
   </Link>
   <Link to="/B">
       <img src={B} alt="Button B" className="absolute top-[7%] left-[12%] bottom-[43%] h-[21%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000" />
   </Link>
   <Link to="/C">
       <img src={C} alt="Button C" className="absolute top-[9%] left-[27%] bottom-[43%] h-[21%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000" />
   </Link>
   <Link to="/D">
       <img src={D} alt="Button D" className="absolute top-[9%] left-[42%] bottom-[43%] h-[21%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000" />
   </Link>
   <Link to="/E">
       <img src={E} alt="Button E" className="absolute top-[7%] left-[55%] bottom-[43%] h-[21%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000" />
   </Link>
   <Link to="/F">
       <img src={F} alt="Button F" className="absolute top-[7%] left-[67%] bottom-[43%] h-[21%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000" />
   </Link>
   <Link to="/G">
       <img src={G} alt="Button G" className="absolute top-[7%] left-[80%] bottom-[43%] h-[21%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000" />
   </Link>
   <Link to="/H">
       <img src={H} alt="Button H" className="absolute top-[32%] left-[-3%] bottom-[43%] h-[21%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000" />
   </Link>
   <Link to="/I">
       <img src={I} alt="Button I" className="absolute top-[32%] left-[12%] bottom-[43%] h-[21%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000" />
   </Link>
   <Link to="/J">
       <img src={J} alt="Button J" className="absolute top-[32%] left-[27%] bottom-[43%] h-[21%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000" />
   </Link>
   <Link to="/K">
       <img src={K} alt="Button K" className="absolute top-[32%] left-[42%] bottom-[43%] h-[21%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000" />
   </Link>
   <Link to="/L">
       <img src={L} alt="Button L" className="absolute top-[32%] left-[55%] bottom-[43%] h-[21%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000" />
   </Link>
   <Link to="/M">
       <img src={M} alt="Button M" className="absolute top-[32%] left-[67%] bottom-[43%] h-[21%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000" />
   </Link>
   <Link to="/N">
       <img src={N} alt="Button N" className="absolute top-[32%] left-[80%] bottom-[43%] h-[21%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000" />
   </Link>
   <Link to="/O">
       <img src={O} alt="Button O" className="absolute top-[57%] left-[-3%] bottom-[43%] h-[21%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000" />
   </Link>
   <Link to="/P">
       <img src={P} alt="Button P" className="absolute top-[57%] left-[12%] bottom-[43%] h-[21%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000" />
   </Link>
   <Link to="/Q">
       <img src={Q} alt="Button Q" className="absolute top-[57%] left-[27%] bottom-[43%] h-[21%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000" />
   </Link>
   <Link to="/R">
       <img src={R} alt="Button R" className="absolute top-[57%] left-[42%] bottom-[43%] h-[21%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000" />
   </Link>
   <Link to="/S">
       <img src={S} alt="Button S" className="absolute top-[57%] left-[55%] bottom-[43%] h-[21%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000" />
   </Link>
   <Link to="/T">
       <img src={T} alt="Button T" className="absolute top-[57%] left-[67%] bottom-[43%] h-[21%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000" />
   </Link>
   <Link to="/U">
       <img src={U} alt="Button U" className="absolute top-[57%] left-[80%] bottom-[43%] h-[21%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000" />
   </Link>
   <Link to="/V">
       <img src={V} alt="Button V" className="absolute top-[82%] left-[-3%] bottom-[43%] h-[21%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000" />
   </Link>
   <Link to="/W">
       <img src={W} alt="Button W" className="absolute top-[82%] left-[12%] bottom-[43%] h-[21%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000" />
   </Link>
   <Link to="/X">
       <img src={X} alt="Button X" className="absolute top-[82%] left-[27%] bottom-[43%] h-[21%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000" />
   </Link>
   <Link to="/Y">
       <img src={Y} alt="Button Y" className="absolute top-[82%] left-[42%] bottom-[43%] h-[21%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000" />
   </Link>
   <Link to="/Z">
       <img src={Z} alt="Button Z" className="absolute top-[82%] left-[55%] bottom-[43%] h-[21%] hover:opacity-85 motion-preset-pulse-sm motion-duration-2000" />
   </Link>

     <Link to={"/alphabets/play"}>
   
         <img
         src={colorbutton}
         alt="Buttons for Alpha Game"
         className="absolute left-[70%] top-[82%] w-auto cursor pointer h-auto"/>
         </Link>
</div>
</>
    );
}
export default Alphabets