import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './complements/Footer';
import NavigationMenu from './complements/NavigationMenu';
import AppRouter from './routes/AppRouter';
import { Box, useMediaQuery } from '@mui/material';
import { theme } from './Theme';

function App() {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  return(
      <div className="App">
        <BrowserRouter>
          <NavigationMenu/>
          <AppRouter/>  
          {!isSmallScreen && <Box position='fixed' top={'50%'}>
            <Footer />
          </Box>}
          {isSmallScreen && <Footer />}          
        </BrowserRouter>
      </div>
  )
};
export default App;