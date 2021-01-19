import React from 'react'
import { Card,
        Container,
        Header,
        Divider } from "semantic-ui-react"

function Contact () {
    return(
        <div className = "contact-div">
            <Container textAlign='center'>
                <Header as="h1">
                    Contact
                </Header>
            <Divider/>
            </Container>
            <Container>
            <Card.Group>
                <Card fluid color='red' header='Linkedin' />
                <Card fluid color='orange' header='Email' icon="mail"/>
            </Card.Group>
            </Container>
        </div>
    )
}

export default Contact