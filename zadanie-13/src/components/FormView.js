import React, { Component } from 'react'
import { Header, Grid } from 'semantic-ui-react'
import AddProfile from './AddProfile'
import ListProfile from './ListProfile'

class FormView extends Component {
  state = {
    profiles: []
  }
  addProfile = ({
    nameProfile,
    phoneProfile,
    emailProfile,
    categoryProfile
  }) => {
    this.setState({
      profiles: this.state.profiles.concat({
        id: Date.now().toString(32),
        name: nameProfile,
        phone: phoneProfile,
        email: emailProfile,
        category: categoryProfile
      })
    })
  }
  removeProfile = profileId => {
    this.setState({
      profiles: this.state.profiles.filter(profile => profile.id !== profileId)
    })
  }
  render() {
    return (
      <React.Fragment>
        <Grid container>
          <Grid.Column>
            <Header as="h1" textAlign="center">
              Zarządzanie listą kontaktów
            </Header>

            <AddProfile addProfile={this.addProfile} />
            <ListProfile
              profiles={this.state.profiles}
              removeProfile={this.removeProfile}
            />
          </Grid.Column>
        </Grid>
      </React.Fragment>
    )
  }
}
export default FormView
