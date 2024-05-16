import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Portfolio from './Components/Portfolio/Portfolio'
import PokemonApp from './Components/Portfolio/Projects/PokemonApp'
import Contact from './Components/Contact/Contact'
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <body>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<Home />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="portfolio" element={<Portfolio />}>
            <Route path="pokemon-app" element={<PokemonApp />}/>
          </Route>
      </Routes>
      </BrowserRouter>
    </body>
  )
}

export default App
