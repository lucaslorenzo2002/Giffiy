import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Gif from './Gif';
import { UseFetch } from './UseFetch';

const API_KEY = "aJJ6wVNzwTn81HAatj2Lb6zL48sK5a7y"

const GifContainer = () => {
    const{keyword} = useParams()

    const{gifs} = UseFetch({API_KEY, keyword})
     
  return (
    <div>
        <h1>GIFS</h1>
      {gifs.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
      
           gifs.map((gif) => (
            <div key={gif.id}>
              <Gif 
              title={gif.title}
              img={gif.img}
              id={gif.id}
              />
            </div>
          )) 
        
      )} 
    </div>
  )
}

export default GifContainer
