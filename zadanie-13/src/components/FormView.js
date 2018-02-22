import React, { Component } from 'react'
import { Header, Grid } from 'semantic-ui-react'
import AddProfile from './AddProfile'
import ListProfile from './ListProfile'

class FormView extends Component {
  state = {
    profiles: [
      {
        id: 1,
        name: 'Paweł Szyposzyński',
        phone: 793679731,
        email: 'poczta@poczta.pl',
        category: 'osobisty'
      },
      {
        id: 2,
        name: 'Marian Piłka',
        phone: 796789456,
        email: 'wd@o2.pl',
        category: 'rodzina'
      }
    ]
  }
  addProfile = (nameProfile, phoneProfile, emailProfile, categoryProfile) => {
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
  render() {
    return (
      <React.Fragment>
        <Grid container>
          <Grid.Column>
            <Header as="h1" textAlign="center">
              Zarządzanie listą kontaktów
            </Header>

            <AddProfile addProfile={this.addProfile} />
            <ListProfile profiles={this.state.profiles} />
          </Grid.Column>
        </Grid>
      </React.Fragment>
    )
  }
}
export default FormView
