import React, { Component } from 'react'

class ListProfile extends Component {
  render() {
    const { profiles } = this.props
    return (
      <div>
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
            </ul>
          )
        })}
      </div>
    )
  }
}

export default ListProfile
