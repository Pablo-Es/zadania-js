import React, { Component } from 'react'
import { Header, Grid } from 'semantic-ui-react'
import AddProfile from './AddProfile'
import ListProfile from './ListProfile'

class FormView extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid container>
          <Grid.Column>
            <Header as="h1" textAlign="center">
              Zarządzanie listą kontaktów
            </Header>

            <AddProfile />
            <ListProfile />
          </Grid.Column>
        </Grid>
      </React.Fragment>
    )
  }
}
export default FormView
