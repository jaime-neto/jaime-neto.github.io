import React from 'react';
import './App.css';
import Footer from './complements/Footer';
import NavigationMenu from './complements/NavigationMenu';
import AppRouter from './routes/AppRouter';

function App() {
  
  return(
    
      <div className="App">
        <NavigationMenu/>
        <AppRouter/>
        <Footer/>
      </div>
  
  )
   
};
export default App;
