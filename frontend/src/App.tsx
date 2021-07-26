import React from 'react'
import logo from './logo.svg'
import './App.css'
import 'antd/dist/antd.css'
import { render } from 'react-dom'
import { Router, Link, RouteComponentProps } from '@reach/router'
import { OldApp } from './pages/OldApp'

const Home = (props: RouteComponentProps) => <OldApp />

function App() {
  return (
    <Router>
      <Home path={'/'} />
    </Router>
  )
}

export default App
