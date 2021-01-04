import React, { useState } from 'react'
import './App.css';
import NavBar from "./components/NavBar"
import SidebarNav from "./components/Sidebar"

function App() {
  
  const [toggle, setToggle] = useState(false)

  function handleToggleMenu() {
    setToggle(!toggle)
  }

  return (
    <div className="main-page">
    <NavBar onToggleMenu={ handleToggleMenu } />
    <div className='ui attached pushable' style ={{height: '100vh'}} >
      <SidebarNav toggleMenu = {toggle}/>
    </div>
    </div>
  );
}

export default App;
