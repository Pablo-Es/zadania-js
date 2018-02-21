import React, { Component } from 'react'
import { Button, Form, Grid } from 'semantic-ui-react'

class AddProfile extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid container>
          <Grid.Column>
            <Form>
              <Form.Field>
                <label>Imię i nazwisko</label>
                <input placeholder="Imię i nazwisko" />
              </Form.Field>
              <Form.Field>
                <label>Numer telefonu</label>
                <input placeholder="Numer telefonu" />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input type="email" placeholder="email" />
              </Form.Field>
              <Form.Field>
                <label>Kategoria(rodzina, praca, itd.)</label>
                <input placeholder="Kategoria" />
              </Form.Field>
              <Button type="submit">Submit</Button>
            </Form>
          </Grid.Column>
        </Grid>
      </React.Fragment>
    )
  }
}

export default AddProfile
