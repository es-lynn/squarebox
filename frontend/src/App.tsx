/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react'
import './App.css'
import { MyRoutes } from './routes/MyRoutes'
import { HashRouter } from 'react-router-dom'
import { NativeBaseProvider } from 'native-base'

function App() {
  return (
    <NativeBaseProvider>
      <HashRouter>
        <MyRoutes />
      </HashRouter>
    </NativeBaseProvider>
  )
}

export default App
