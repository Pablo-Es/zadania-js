import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import AddProfile from './AddProfile'

class FormView extends Component {
  render() {
    return (
      <React.Fragment>
        <Header as="h1" textAlign="center">
          Zarządzanie listą kontaktów
        </Header>

        <AddProfile />
      </React.Fragment>
    )
  }
}
export default FormView
