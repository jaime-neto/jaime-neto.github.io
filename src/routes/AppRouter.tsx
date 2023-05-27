import React from "react";
import {Routes, Route} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import HomePage from "./HomePage";

const AppRoutes = ()=>{

    return(
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>      
    );

};

export default AppRoutes;
