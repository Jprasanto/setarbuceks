import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import LandingPage from './components/LandingPage.jsx'
import MenuPage from './components/MenuPage.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    {/* <LandingPage /> */}
    <MenuPage />
    {/* <Footer /> */}
    </>
  )
}

export default App
