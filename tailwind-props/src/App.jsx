import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Sarah from './components/Sarah'

function App() {
  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded'>
        vite with tailwindCSS</h1> 
      {/* <Card /> */}
      <Sarah username="ravi"/>
      <Sarah username="sarah" postition="staff"/>
      <Sarah />
    </>
  )
}

export default App
