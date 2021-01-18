import React, { useState } from 'react'
import './App.css';
import NavBar from "./components/NavBar"
import SidebarNav from "./components/Sidebar"
import Projects from "./components/Projects"
import Main from "./components/Main"
import About from "./components/About"
import cx from 'classnames'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  
  const [toggle, setToggle] = useState(false)

  function handleToggleMenu() {
    setToggle(!toggle)
  }
  function handleSidebarHide() {
    setToggle(false)
  }

  const classes = cx(
    'pusher',
    'button',
    {'dimmed': toggle}
  )

  return (
    <Router>
      <div className="main-page">
        <NavBar onToggleMenu={ handleToggleMenu } />
        <div className='ui attached pushable' style ={{height: '100vh'}} >
          <SidebarNav toggleMenu = {toggle} handleSidebarHide={handleSidebarHide}/>
          <div className={classes}>
            <Switch>
              <Route exact path="/">
                <Main />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/contact">
              </Route>
              <Route path="/about">
                <About/>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
