import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/about'
import Error from './pages/Error/error'
import Appartment from './pages/Appartment/appartment'
import './styles/body.scss'


// Création des routes

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        < Route exact path="/" element={<Home />} />
        < Route path="/about" element={<About />} />
        {/*/:id permettra par la suite de récupérer directement l'id de l'appartement*/}
        < Route path="/appartment/:id" element={<Appartment />} />
        < Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

