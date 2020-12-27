import React, { useState } from 'react'
import './App.css';
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

function App() {
  
  const [toggle, setToggle] = useState(false)

  function handleToggleMenu() {
    setToggle(!toggle)
  }

  return (
    <div className="main-page">
      <Header onToggleMenu={ handleToggleMenu } />
    <div className='ui attached pushable' style ={{height: '100vh'}} >
      <Sidebar toggleMenu = {toggle}/>
    </div>
    </div>
  );
}

export default App;
