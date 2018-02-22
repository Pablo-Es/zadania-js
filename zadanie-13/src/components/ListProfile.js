import React, { Component } from 'react'
import { Button, Header } from 'semantic-ui-react'

class ListProfile extends Component {
  handleRemoveClick = event => {
    const profileId = event.target.dataset.profileId
    this.props.removeProfile(profileId)
  }
  render() {
    const { profiles } = this.props
    return (
      <React.Fragment>
        <div>
          <Header as="h2" textAlign="center">
            Twoja lista kontaktów
          </Header>
          {profiles.map(profile => {
            return (
              <ul key={profile.id}>
                <li>
                  <strong>{profile.name}</strong>
                </li>
                <li>
                  Numer telefonu: {profile.phone}, adres email: {profile.email}
                </li>
                <li>[{profile.category}]</li>
                <Button
                  data-profile-id={profile.id}
                  onClick={this.handleRemoveClick}
                >
                  Usuń kontakt
                </Button>
              </ul>
            )
          })}
        </div>
      </React.Fragment>
    )
  }
}

export default ListProfile
