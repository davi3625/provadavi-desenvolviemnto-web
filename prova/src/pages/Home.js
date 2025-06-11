import React from 'react';
import './Home.css';

function home() {
  return (
    <div>
      <div className="home-content">
        <h2>Bem-vindo ao Connectbook</h2>
        <p>Gerencie e visualize seus contatos de forma prática.</p>
        <div className="home-links">
          <a href="/produtos">Visualizar Contatos</a>
          <span className="separator">|</span>
          <a href="/produtos">Ver contatos</a>
          
        </div>
      </div>
     
    </div>
  );
}

export default home;