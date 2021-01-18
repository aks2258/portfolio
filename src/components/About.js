import React from 'react'
import certification from "../Images/cert.pdf"

import { Container, 
        Divider,
        Header } from "semantic-ui-react"

function About () {
    return(
        <div className = "about-div">
            <Container textAlign="center">
                <Header as="h1">About Me</Header>
            </Container>
            <Container>
            <Divider />
            <p>
                My name is Arnie Serrano and I am a Software Engineer from Austin, Texas
                utilizing my Bachelors Degree earned at the University of Texas at Austin
                combined with my skills that I developed after completeing the immersive 15-week
                Software Engineering to create simple and intuitive websites such as this very website.
            </p>
            <Divider />
            </Container>
            <object data={certification} type="application/pdf" width="100%" height="600vh">
                <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
            </object>
        </div>
    )
}

export default About