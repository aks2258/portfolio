import React from 'react'
import certification from "../Images/cert.pdf"

import { Container, 
        Divider,
        Header } from "semantic-ui-react"

function About () {
    return(
        <div className = "about-div">
            <br/>
            <Container textAlign="center">
                <Header as="h1" color="olive">About Me</Header>
            </Container>
            <Container>
            <Divider />
            <p className = "about">
                My name is Arnie Serrano and I am a Software Engineer from Austin, Texas
                utilizing my Bachelors Degree earned at the University of Texas at Austin
                combined with my skills that I developed after completeing the immersive 15-week
                Software Engineering to create simple and intuitive websites such as this very website.
            </p>
            <Divider />
            </Container>
            <object data={certification} type="application/pdf" width="100%" height="600vh">
            </object>
            <Container>
                <Divider />
                
            </Container>
        </div>
    )
}

export default About