import React from 'react'
import ReactDOM from 'react-dom/client'
import { MainApp } from './MainApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainApp/>
    </BrowserRouter>
  </React.StrictMode>
)
