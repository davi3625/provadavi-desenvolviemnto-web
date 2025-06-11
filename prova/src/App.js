import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contatos from './pages/Contatos';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
      
        <div className="content">
          <Routes>
            <Route path="/" element={<home />} />
            
            <Route path="/Contatos/:id" element={<Contatos />} />
          </Routes>
        </div>
      
      </div>
    </Router>
  );
}

export default App;
