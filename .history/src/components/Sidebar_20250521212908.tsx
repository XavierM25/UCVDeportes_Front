import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <header className="left-section">
      <div className="logo"></div>

      <nav>
        <ul className="sidebar">
          <li className="item">
            <NavLink to="/inscripciones" className={({ isActive }) => isActive ? 'active' : ''}>
              <i className="ri-article-line"></i>
              <h3>Inscripciones</h3>
            </NavLink>
          </li>
          {/* Puedes agregar más links aquí cuando los tengas */}
        </ul>
      </nav>

      <div className="sign-out">
        <a href="http://127.0.0.1:8000/api/logout" id="logout-button">
          <i className="ri-logout-box-r-line"></i>
          <h3>Cerrar Sesión</h3>
        </a>
      </div>
    </header>
  );
}
