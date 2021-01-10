import React, { useState } from 'react'
import './App.css';
import NavBar from "./components/NavBar"
import SidebarNav from "./components/Sidebar"
import Projects from "./components/Projects"
import cx from 'classnames'

function App() {
  
  const [toggle, setToggle] = useState(false)

  function handleToggleMenu() {
    setToggle(!toggle)
  }

  const classes = cx(
    'pusher',
    'button',
    {'dimmed': toggle}
  )

  return (
    <div className="main-page">
    <NavBar onToggleMenu={ handleToggleMenu } />
    <div className='ui attached pushable' style ={{height: '100vh'}} >
      <SidebarNav toggleMenu = {toggle}/>
      <div className={classes}>
        <Projects />
      </div>
    </div>
    </div>
  );
}

export default App;
