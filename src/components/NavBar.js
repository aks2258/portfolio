import React from 'react'

function NavBar(props) {

    return(
        <div className= 'ui top inverted attached menu'>
            <span className='item link grey' onClick = {props.onToggleMenu}>
                Menu
            </span>
        </div>
    )
}

export default NavBar