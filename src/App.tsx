//import { useState } from 'react'
import './App.css'
import CompatibilityPage from './pages/CompatibilityPage'
import Zodiac from './pages/ZodiacInfo'
import Layout from './pages/Layout'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import HoroscopePage from './pages/HoroscopePage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/zodiac" element={<Zodiac />} />
          <Route path="/compatibility" element={<CompatibilityPage />} />
          <Route path="/horoscope" element={<HoroscopePage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
