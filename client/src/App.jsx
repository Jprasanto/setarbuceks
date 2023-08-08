import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import LandingPage from './components/LandingPage.jsx'
import MenuPage from './components/MenuPage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    {/* <LandingPage /> */}
    <MenuPage />
    </>
  )
}

export default App
