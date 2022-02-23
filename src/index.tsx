import React from 'react';
import ReactDOM from 'react-dom';
import {StyledEngineProvider } from '@mui/system';
import './styles.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Dashboard, SignIn } from './components';
import { theme } from './Theme/themes';
import { ThemeProvider } from '@mui/styles';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
            <Route path='/' element={<Home title ={'Car Inventory'}/>} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/signin' element={<SignIn />} />
          </Routes>
        </Router>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
