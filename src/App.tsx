import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './complements/Footer';
import NavigationMenu from './complements/NavigationMenu';
import AppRouter from './routes/AppRouter';

function App() {
  
  return(
    
      <div className="App">
        <BrowserRouter>
          <NavigationMenu/>
          <AppRouter/>  
          <Footer/>
        </BrowserRouter>
      </div>
  
  )
   
};
export default App;
