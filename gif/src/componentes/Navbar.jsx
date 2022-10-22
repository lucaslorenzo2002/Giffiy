 import React from 'react';
import { Link } from 'react-router-dom';
import '../hojas_de_estilo/Navbar.css'


const Navbar = () => {
  const POPULAR_GIFS = ["argentina", "programacion", "matrix", "nfl", "nba"]
  return (
    <div>
        <ul className='navbar'>
          {POPULAR_GIFS.map((popular_gif) => (
            <li key={popular_gif}>
              <Link to={`/${popular_gif}`}>gifs de {popular_gif}</Link>
            </li>
          ))}
        </ul>
      </div>
  )
}

export default Navbar 
