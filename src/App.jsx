import { BrowserRouter } from 'react-router-dom'
import './App.css'

import { Header, Content, Footer } from './components'
import { Inicial } from './pages'
import { Router } from './Router'

const App = () => {
  return (
    <BrowserRouter>
    <Router />
      
    </BrowserRouter>
  )
}

export { App };
