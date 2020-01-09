import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Container } from './styles';

import './style.css';


export default function Navbar() {
  return (
    <div className="containerNav">
      <nav>
        {/* <a href="https://www.w3schools.com/css/css_navbar.asp">Experiência Academica</a>
            <a href="https://github.com/punisher077/portifolio-ieee">Projetos</a>
            <a href="d"> Stack e Linguagens conhecidas</a> */}
        <NavLink className="navLink" to="/">
          Experiência Academica
              </NavLink>
        <NavLink className="navLink" to="/projetos">
          Projetos
              </NavLink>
        <NavLink className="navLink" to="/">
          Stack e Linguagens conhecidas
              </NavLink>
      </nav>
      <hr/>

    </div>
  );
}
