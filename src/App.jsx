import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Portfolio from './Components/Portfolio/Portfolio'
import WeatherApp from './Components/Portfolio/Projects/WeatherApp'
import Contact from './Components/Contact/Contact'
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <body>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
              exact
              path="/"
              element={<Home />}
          />
          <Route
              exact
              path="/contact"
              element={<Contact />}
          />
          <Route
              exact
              path="/portfolio"
              element={<Portfolio />}
          />
          <Route
              exact
              path="/portfolio/weather"
              element={<WeatherApp />}
          />
      </Routes>
      </BrowserRouter>
    </body>
  )
}

export default App
