import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navegacion-principal contenedor">
    <Link to="https://www.filmaffinity.com/es/film704416.html" target="_blank">Opiniones</Link>
    <Link to="https://www.mubis.es/comunidad/sack13/fotos/mi-critica-de-interstellar-un-final-estupendo-para-una-obra-maravillosa" target="_blank">Valoraciones</Link>
    <Link to="https://www.youtube.com/watch?v=SNq3vl8Ny-E" target="_blank">Reúmenes</Link>
    <Link to="https://www.youtube.com/watch?v=LYS2O1nl9iM" target="_blank">Ver trailer</Link>
  </nav>
);

export default Navbar;

