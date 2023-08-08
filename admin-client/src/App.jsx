import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import FormLogin from './components/FormLogin.jsx'
import Category from './components/Category.jsx'
import Menu from './components/Menu.jsx'
import AddMenu from './components/AddMenu.jsx'

function App() {
  
  return (
    <div>
      <Navbar />
      <FormLogin />
      <Category />
      <Menu />
      <AddMenu />
    </div>
  )
}

export default App
