import React from 'react'
import { createRoot } from 'react-dom/client'
import RyzemSite from './RyzemSite.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RyzemSite />
  </React.StrictMode>
)
