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
                My name is Arnie Serrano, and I’m a frontend 
                developer with a Bachelor’s of Arts in English 
                from the University of Texas at Austin, and I use 
                my understanding of syntax, how written 
                communication can be interpreted, and my research 
                skills, to create intuitive apps and websites that 
                anyone can navigate and use.
                </p>
                <br/>
                <p>
                I have been passionate about programming for the 
                last few years, and while working with machine 
                learning by analyzing data from self-driving cars 
                when I was employed by Adecco on behalf of Waymo, 
                I wanted to improve my programming abilities. 
                Once when we began using a scheduler to keep track 
                of our duties, I wanted to create a more organized, 
                automated and visually appealing hub that could reduce 
                our screen space and allow us to navigate between 
                tasks and tabs easily. It was then I decided I would 
                put aside some of my earnings to enroll at Flatiron 
                School where I enhanced my programming skills, learned 
                how programming languages have syntax that create 
                meaning to the computer and developed efficient apps 
                with the purpose of being as intuitive as possible and 
                not visually overwhelming.

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