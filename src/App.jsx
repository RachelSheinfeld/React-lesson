import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Light from './components/Light'
import From from './components/From'
import PasswordStrengthIndicator from './components/PasswordStrengthIndicator'

function App() {

  return (
    <>
  
    <From/>
     <PasswordStrengthIndicator/>
     <Light/>
    </>
  )
}

export default App
