import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';


function App() {
  return (
    <Router>
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Header />} />
        <Route path="/login" element={<h1>Login</h1>} />
      </Routes>
     
    </div>
    </Router>
  );
}

export default App;
