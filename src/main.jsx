import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header.tsx'
import Phone from './components/phone.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Phone />
    
  </React.StrictMode>,
)
