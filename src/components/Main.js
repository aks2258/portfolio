import React from 'react'
import { Grid, Header } from 'semantic-ui-react'

function Main () {
    return(
        <div className="text-div">
        <main>
            <span><p className = "welcome-text">Welcome</p></span>
        </main>
            <p>to my website. You can use the following buttons to navigate or use the sidebar
        once you're on any page.</p>
        <Grid verticalAlign='middle' columns={4} centered>
            <Grid.Row>
            <Grid.Column>
                <Header color = "grey">About Me</Header>
            </Grid.Column>
            <Grid.Column>
                <Header color = "grey">Projects</Header>
                <br />
            </Grid.Column>
            <Grid.Column>
                <Header color = "grey">Contact</Header>
            </Grid.Column>
            </Grid.Row>
        </Grid>
        </div>
    )
}

export default Main