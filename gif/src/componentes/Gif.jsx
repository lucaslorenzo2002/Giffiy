import React from 'react'
import '../hojas_de_estilo/Gif.css'

const Gif = ({title, img, id}) => {
  return (
    <div className='gif'>
      <h1>{title}</h1>
      <img src={img} alt="" />
    </div>
  )
}

export default Gif
