import React from 'react';
import { Link } from 'react-router-dom';

import './Contatos.css';

function Contatos() {
  const Contatos= JSON.parse(localStorage.getItem('Contatos')) || [];

  return (
    <div className="Contatos-container">
      <h2>Contatos Cadastrados</h2>
      <p>Total de Contatos: {Contatos.length}</p>
      <div className="lista">
        {Contatos.map((Contatos, index) => (
          <div key={index} className="item-Contatos">
            {Contatos.nome} - R$ {Contatos.preco}
            <Link to={`/detalhes/${index}`} className="detalhes-link">Ver detalhes</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contatos;