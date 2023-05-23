import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './complements/Footer';
import { useTheme } from '@mui/material/styles';
import NavigationMenu from './complements/NavigationMenu';
import AppRouter from './routes/AppRouter';
import { Box, useMediaQuery } from '@mui/material';

function App() {
  const theme = useTheme();
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