
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import theme from '../components/ui/Theme';
import Header from '../components/ui/header';



function App() {
  return (
    <ThemeProvider theme={theme}>     
      <BrowserRouter>
      <Header />
          <Routes>
            <Route  path='/welcome' element={() => <div> Home</div>} />
            <Route  path='/services' element={()=> <div> Services</div>} />
            <Route  path='/contact' element={() => <div> Contact Us</div>} />
            <Route  path='/estimate' element={() => <div> Estimate</div>} />
            <Route  path='/about' element={() => <div> about</div>} />
          </Routes>
      </BrowserRouter>    
    
      </ThemeProvider>
  );
}

export default App;
