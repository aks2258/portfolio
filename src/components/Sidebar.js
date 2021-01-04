import React from 'react'

import {
    Icon,
    Menu,
    Sidebar,
  } from 'semantic-ui-react'

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
            directions = "right"
          >
            <Menu.Item as= 'a'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='archive' />
                    Projects
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='phone' />
              Contact
            </Menu.Item>
          </Sidebar>
    )
}

export default SidebarNav