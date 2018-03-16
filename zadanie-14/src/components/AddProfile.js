import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

const initialState = {
  nameProfile: '',
  phoneProfile: '',
  emailProfile: '',
  categoryProfile: ''
}

class AddProfile extends Component {
  state = initialState
  handleSubmit = event => {
    event.preventDefault()
    this.props.addProfile(this.state)

    this.setState(initialState)
  }
  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <React.Fragment>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Imię i nazwisko</label>
            <input
              onChange={this.handleChange}
              placeholder="Imię i nazwisko"
              name="nameProfile"
              value={this.state.nameProfile}
            />
          </Form.Field>
          <Form.Field>
            <label>Numer telefonu</label>
            <input
              type="number"
              onChange={this.handleChange}
              placeholder="Numer telefonu"
              name="phoneProfile"
              value={this.state.phoneProfile}
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              type="email"
              onChange={this.handleChange}
              placeholder="email"
              name="emailProfile"
              value={this.state.emailProfile}
            />
          </Form.Field>
          <Form.Field>
            <label>Kategoria(rodzina, praca, itd.)</label>
            <input
              onChange={this.handleChange}
              placeholder="Kategoria"
              name="categoryProfile"
              value={this.state.categoryProfile}
            />
          </Form.Field>
          <Button type="submit">Dodaj kontakt</Button>
        </Form>
      </React.Fragment>
    )
  }
}

export default AddProfile
