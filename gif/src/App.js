
import { useState } from 'react';
import './App.css';
import GifContainer from './componentes/GifContainer';
import{BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from './componentes/Home';
import GifDetailContainer from './componentes/GifDetailContainer';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Home />} />  
      <Route exact path='/:keyword' element={<GifContainer/>} />  
      <Route exact path='/:keyword/:id' element={<GifDetailContainer/>} />  
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
