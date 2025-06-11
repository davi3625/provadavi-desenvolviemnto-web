import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="titulo">Connectbook</h1>
      <nav className="menu">
        <Link to="/" className="menu-item">inicio</Link>
        <Link to="/Contatos" className="menu-item">Contatos</Link>
        <Link to="/Visualizar Contatos" className="menu-item">VisualizarContatos</Link>
      </nav>
    </header>
  );
}

export default Header;
