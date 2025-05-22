import React from 'react';
import { NavLink } from 'react-router-dom'; // si usas react-router-dom

export default function Sidebar() {
  return (
    <header className="left-section">
      <div className="logo"></div>
      <nav>
        <ul className="sidebar">
          <li className="item">
            <NavLink to="/dashboard" activeClassName="active">
              <i className="ri-home-4-line"></i>
              <h3>Dashboard</h3>
            </NavLink>
          </li>
          <li className="item">
            <NavLink to="/perfil" activeClassName="active">
              <i className="ri-user-6-line"></i>
              <h3>Mi Perfil</h3>
            </NavLink>
          </li>
          <li className="item">
            <NavLink to="/ranking" activeClassName="active">
              <i className="ri-bar-chart-line"></i>
              <h3>Ranking</h3>
            </NavLink>
          </li>
          <li className="item">
            <NavLink to="/inscripciones" activeClassName="active">
              <i className="ri-article-line"></i>
              <h3>Inscripciones</h3>
            </NavLink>
          </li>
          <li className="item">
            <NavLink to="/ajustes" activeClassName="active">
              <i className="ri-settings-3-line"></i>
              <h3>Ajustes</h3>
            </NavLink>
          </li>
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
