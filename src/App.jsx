 import { useState } from "react"
import {Route, Routes,Navigate} from "react-router-dom"
import React from "react"
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import About from "./pages/About.jsx"
import Shapes from "./pages/Shapes.jsx"
import Number from "./pages/Number.jsx"
import Stories from "./pages/Stories.jsx"
import ScrollToTop from "./components/ScrollToTop.jsx"
import Story1 from "./pages/Story1.jsx"
import Story2 from "./pages/Story2.jsx"
import Story3 from "./pages/Story3.jsx"
import NotFound from "./pages/NotFound.jsx"
import ShapesEasy from "./pages/ShapesEasy.jsx"
import ShapesMedium from "./pages/ShapesMedium.jsx"
import ShapesHard from "./pages/ShapesHard.jsx"
import numbersEasy from "./pages/numbersEasy.jsx"
import numbersHard from "./pages/numbersHard.jsx"
import numbersMedium from "./pages/numbersMedium.jsx"
import A from "./pages/A.jsx";
import B from "./pages/B.jsx";
import C from "./pages/C.jsx";
import D from "./pages/D.jsx";
import E from "./pages/E.jsx";
import F from "./pages/F.jsx";
import G from "./pages/G.jsx";
import H from "./pages/H.jsx";
import I from "./pages/I.jsx";
import J from "./pages/J.jsx";
import K from "./pages/K.jsx";
import L from "./pages/L.jsx";
import M from "./pages/M.jsx";
import N from "./pages/N.jsx";
import O from "./pages/O.jsx";
import P from "./pages/P.jsx";
import Q from "./pages/Q.jsx";
import R from "./pages/R.jsx";
import S from "./pages/S.jsx";
import T from "./pages/T.jsx";
import U from "./pages/U.jsx";
import V from "./pages/V.jsx";
import W from "./pages/W.jsx";
import X from "./pages/X.jsx";
import Y from "./pages/Y.jsx";
import Z from "./pages/Z.jsx";
import ShapesEasylevel1 from "./pages/ShapesEasyLevel1.jsx"
import ShapesEasylevel2 from "./pages/ShapesEasyLevel2.jsx"
import ShapesEasylevel3 from "./pages/ShapesEasyLevel3.jsx"
import ShapesEasylevel4 from "./pages/ShapesEasyLevel4.jsx"
import ShapesEasylevel5 from "./pages/ShapesEasyLevel5.jsx"
import AlphabetsPlay from "./pages/AlphabetsPlay.jsx"

const Alphabets = React.lazy(() => import("./pages/Alphabets.jsx"))
function App() {
  
  return(
   
  <>  
  <ScrollToTop/>
      <div className="bg-[#3DA8CC] font-[coiny] justify-items-center align-middle h-screen w-screen content-center md:hidden">
        <img src="/responsive.png" alt="rotate Phone Background"/> 
        <h1 className="text-white">Rotate Phone to experience</h1>
        </div>
 
  <Routes>
      <Route path="/" element={<Navigate to="/home"/>}/>
      <Route path="/stories/story1" element={<Story1/>}/>
      <Route path="/stories/story2" element={<Story2/>}/>
      <Route path="/stories/story3" element={<Story3/>}/>
      <Route path="/stories" element={<Stories/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/> 
      <Route path="/about" element={<About/>}/>
      <Route path="/numbers" element={<Number/>}/>
      <Route path="/alphabets" element={<Alphabets/>}/> 
        <Route path="/alphabets/play" element={<AlphabetsPlay/>}/>
      <Route path="/shapes" element={<Shapes/>}/>
      <Route path="*" element={<NotFound/>}/>
      <Route path="/shapes/easy" element={<ShapesEasy/>}/>
        <Route path="/shapes/easy/level1" element={<ShapesEasylevel1/>}/>
        <Route path="/shapes/easy/level2" element={<ShapesEasylevel2/>}/>
        <Route path="/shapes/easy/level3" element={<ShapesEasylevel3/>}/>
        <Route path="/shapes/easy/level4" element={<ShapesEasylevel4/>}/>
        <Route path="/shapes/easy/level5" element={<ShapesEasylevel5/>}/>
      <Route path="shapes/medium" element={<ShapesMedium/>}/>
      <Route path="shapes/hard" element={<ShapesHard/>}/>
      <Route path="numbers/easy" element={<numbersEasy/>}/>
      <Route path="numbers/medium" element={<numbersMedium/>}/>
      <Route path="numbers/hard" element={<numbersHard/>}/>
      <Route path="/A" element={<A/>}/>
      <Route path="/B" element={<B/>}/>
      <Route path="/C" element={<C/>}/>
      <Route path="/D" element={<D/>}/>
      <Route path="/E" element={<E/>}/>
      <Route path="/F" element={<F/>}/>
      <Route path="/G" element={<G/>}/>
      <Route path="/H" element={<H/>}/>
      <Route path="/I" element={<I/>}/>
      <Route path="/J" element={<J/>}/>
      <Route path="/K" element={<K/>}/>
      <Route path="/L" element={<L/>}/>
      <Route path="/M" element={<M/>}/>
      <Route path="/N" element={<N/>}/>
      <Route path="/O" element={<O/>}/>
      <Route path="/P" element={<P/>}/>
      <Route path="/Q" element={<Q/>}/>
      <Route path="/R" element={<R/>}/>
      <Route path="/S" element={<S/>}/>
      <Route path="/T" element={<T/>}/>
      <Route path="/U" element={<U/>}/>
      <Route path="/V" element={<V/>}/>
      <Route path="/W" element={<W/>}/>
      <Route path="/X" element={<X/>}/>
      <Route path="/Y" element={<Y/>}/>
      <Route path="/Z" element={<Z/>}/>
  </Routes>
  </>
  );
}

export default App
