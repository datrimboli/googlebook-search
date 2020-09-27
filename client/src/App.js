import React from 'react'
import Home from './pages/Home'
import Saved from './pages/Saved'
import { Nav, NavItem, NavLink } from 'reactstrap'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

function App() {
  return (

    <Router>
      <div>
        <p>Google API Book Search</p>
        <Nav>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/saved">Saved</NavLink>
          </NavItem>
        </Nav>
        <hr />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
  )
}


export default App
