/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react'
import './App.css'
import { MyRoutes } from './routes/MyRoutes'
import { HashRouter } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <MyRoutes />
    </HashRouter>
  )
}

export default App
