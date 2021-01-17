import React from 'react'

import {
    Icon,
    Menu,
    Sidebar,
  } from 'semantic-ui-react'
import { NavLink } from "react-router-dom"

function SidebarNav(props) {

    return(
        <Sidebar
            as={Menu}
            animation='push'
            icon='labeled'
            inverted
            vertical
            visible={props.toggleMenu}
            width='thin'
          >
            <Menu.Item as= {NavLink} to="/">
              <Icon name='home' />
                Home
            </Menu.Item>
            <Menu.Item as={ NavLink } to='/projects'>
              <Icon name='archive' />
                Projects
            </Menu.Item>
            <Menu.Item as={NavLink} to="contact">
              <Icon name='phone' />
                Contact
            </Menu.Item>
          </Sidebar>
    )
}

export default SidebarNav