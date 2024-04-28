import React from 'react'
import ReactDOM from 'react-dom/client'
import Hero from '../sections/Hero/Hero'
import '../sections/Hero/index.css'
import AppButtons from '../componnents/Button/Button'
import '../componnents/Button/index.css'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Hero />
    <AppButtons />
  </React.StrictMode>




);


