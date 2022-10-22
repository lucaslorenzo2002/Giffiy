import React, { useState } from 'react';

import {Link, useLocation } from 'wouter';

const NavbarForm = () => {
    const[keyword, setKeyword] = useState("")

    const[path, pushLocation] = useLocation()
    

    const handleSubmit = (e) => {
        e.preventDefault();
        pushLocation(`/${keyword}`)
    }

    const handleChange = (e) => {
        setKeyword(e.target.value)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='busca un gif...' value={keyword} onChange={handleChange}/>
        <input type="submit" value="buscar" />
      </form>
    </div>
  )
}

export default NavbarForm
