import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import HomePage from "./HomePage";

const AppRoutes = ()=>{

    return(
        <Router>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </Router>
    );

};

export default AppRoutes;
