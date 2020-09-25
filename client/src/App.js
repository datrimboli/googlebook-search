import React from 'react'
import Home from './pages/Home'
import Saved from './pages/Saved'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
