import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'
import { HashRouter as Router } from 'react-router-dom'
import Routes from 'routes'

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)