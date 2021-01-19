import React from 'react'
import { 
    Header } from "semantic-ui-react"

function NavBar(props) {

    return(
        <div className= 'ui top inverted attached menu'>
            <span className='item link grey' onClick = {props.onToggleMenu}>
                <Header as="h1" inverted color='grey'>Menu</Header>
            </span>
        </div>
    )
}

export default NavBar