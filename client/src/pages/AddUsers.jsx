import React, { useState, useEffect } from 'react'
import { Form, Col, InputGroup, Button, Alert } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import axios from 'axios'
// import {
//   Form as ValidatedForm,
//   ValidatedInput,
// } from 'react-bootstrap-validation'
const { REACT_APP_API_URL } = process.env
// import ContactContext from '../../contexts/contact/contactContext'

export default function ContactForm() {
  //   const contactContext = useContext(ContactContext)

  //Setting initial state
  const initialUser = {
    name: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    country: '',
    area: '',
  }
  const [user, setUser] = useState(initialUser)

  // Destructuring values from the state
  const { name, email, phone, city, state, country, area } = user

  // Making  a universal onchange function so it will change with respect to the element with that name and the changed values
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })
  const [validated, setValidated] = useState(false)

  const isCurrentUserEmpty = () =>
    Object.entries(user)
      .map((val) => val[1])
      .some((val) => val == '')

  function addUser(e) {
    e.preventDefault()
    console.log(user)
    console.log('Clicked on add user')
    axios
      .post(REACT_APP_API_URL, user)
      .then(() => {
        console.log('User created')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
      console.log(user)
      addUser(event)
    }
    event.preventDefault()

    setValidated(true)
  }

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center', marginBottom: 15 }}>Add Users: </h2>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="enter your name"
              name="name"
              value={name}
              onChange={onChange}
            />

            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="email"
                placeholder="enter your email"
                name="email"
                value={email}
                onChange={onChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          {/* <ValidatedInput
            type="password"
            name="password"
            label="Password"
            // You can pass params to validation rules
            validate="required,isLength:6:60"
            errorHelp={{
              required: 'Please specify a password',
              isLength: 'Password must be at least 6 characters',
            }}
          /> */}
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Phone</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="tel"
                placeholder="phone no."
                name="phone"
                value={phone}
                onChange={onChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Phone no. should be at-least 10 digit long
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="3" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              name="city"
              value={city}
              onChange={onChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              placeholder="State"
              name="state"
              value={state}
              onChange={onChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              placeholder="Country"
              name="country"
              value={country}
              onChange={onChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid country.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Area</Form.Label>
            <Form.Control
              type="text"
              placeholder="Area"
              name="area"
              value={area}
              onChange={onChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Area.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Button
          disabled={isCurrentUserEmpty() ? true : false}
          type="submit"
          onClick={(e) => addUser(e)}
        >
          Add User
        </Button>
      </Form>
    </div>
  )
}
