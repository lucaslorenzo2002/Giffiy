import React from 'react'
import Gif from './Gif'
import Navbar from './Navbar'
import NavbarForm from './NavbarForm'
import { UseFetch } from './UseFetch'
import '../hojas_de_estilo/Home.css'

const API_KEY = "aJJ6wVNzwTn81HAatj2Lb6zL48sK5a7y"

const Home = () => {
  const{gifs} = UseFetch({API_KEY})
  return (
    <div>
      <NavbarForm />
        <h3>Ultimas busquedas</h3>
      <div className="GIFS_HOME">
      {gifs.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        
           gifs.map((gif) => (
            <div className='GIF_HOME' key={gif.id}>
              <Gif 
              img={gif.img}
              id={gif.id}
              />
              </div>))
        )}
        </div>
        <h2>los gifs mas populares</h2>
      <Navbar />
    </div>
  )
}

export default Home
