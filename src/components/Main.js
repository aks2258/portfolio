import React from 'react'
import { Grid, Header } from 'semantic-ui-react'

function Main () {
    return(
        <Grid verticalAlign='middle' centered>
        <Grid.Row>
          <Grid.Column>
          <Header size='huge' color='grey'>Welcome</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
}

export default Main