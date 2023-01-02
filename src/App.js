import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="app">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/checkout" element={<h1>Checkout</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
