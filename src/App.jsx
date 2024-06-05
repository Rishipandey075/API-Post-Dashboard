// App.js
// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Toolbar, Container } from '@mui/material';
import Posts from './Components/Posts';
import Header from './Components/Header';
import './App.css';

// App component to setup routing and layout
const App = () => {
  return (
    <Router>
      {/* Apply global CSS reset */}
      <CssBaseline />
      {/* AppBar for navigation */}
      <Toolbar>
        <Header></Header>
      </Toolbar>
      {/* </AppBar> */}
      {/* Main container for the app content */}
      <Container>
        <Routes>
          <Route path="/" element={<Posts />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
