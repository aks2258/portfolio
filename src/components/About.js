import React from 'react'

import { Container, Divider } from "semantic-ui-react"

function About () {
    return(
        <div className = "about-div">
            <Container textAlign="center">About Me</Container>
            <Container>
            <Divider />
            <p>
                My name is Arnie Serrano and I am a Software Engineer from Austin, Texas
                utilizing my Bachelors Degree earned at the University of Texas at Austin
                combined with my skills that I developed after completeing the immersive 15-week
                Software Engineering to create simple and intuitive websites such as this very website.
            </p>
            </Container>
        </div>
    )
}

export default About