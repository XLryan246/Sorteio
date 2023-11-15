// Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/megasena" className={location.pathname === '/megasena' ? 'cor-mega active' : 'cor-mega'}>
        Mega-Sena
      </Link>
      <Link to="/lotofacil" className={location.pathname === '/lotofacil' ? 'cor-loto active' : 'cor-loto'}>
        Lotofacil
      </Link>
      <Link to="/quina" className={location.pathname === '/quina' ? 'cor-quina active' : 'cor-quina'}>
        Quina
      </Link>
    </nav>
  );
}

export default Navbar;
