import React, { useState } from 'react'
import './App.css';
import NavBar from "./components/NavBar"
import SidebarNav from "./components/Sidebar"
import Projects from "./components/Projects"
<<<<<<< HEAD
import cx from 'classnames'

=======
>>>>>>> 568194da625de3c5492e854fe86bff5030bdfddb

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
