import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import PageContent from './Components/PageContent/PageContent'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <body>
        <Header />
        <PageContent />
        <Footer />
      </body>
    </>
  )
}

export default App
