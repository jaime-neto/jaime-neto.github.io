import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from './routes/HomePage';

function App() {
  
  return(
    
      <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
          </Routes>
        </Router>
        <h1>PORTFOLIO</h1>
      </div>
  
  )
   
};
export default App;
