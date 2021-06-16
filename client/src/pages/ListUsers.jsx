import React, { useEffect, useState } from 'react'
import { Row, Container, Card, Button } from 'react-bootstrap'
import axios from 'axios'
const { REACT_APP_API_URL } = process.env

export default function ListUsers() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get(REACT_APP_API_URL).then((res) => {
      const allUsers = res.data
      setUsers(allUsers)
    })
  }, [])

  function refreshUsers() {
    axios.get(REACT_APP_API_URL).then((res) => {
      const allUsers = res.data
      setUsers(allUsers)
    })
  }

  function deleteUser(e, _id) {
    e.preventDefault()
    console.log(_id)
    console.log('Clicked on delete user')
    axios
      .delete(`${REACT_APP_API_URL}/${_id}`)
      .then(() => {
        console.log('User removed')
        refreshUsers()
      })
      .catch((err) => console.error(err))
  }

  return (
    <>
      <Row>
        <Container fluid>
          <h2 style={{ textAlign: 'center', marginBottom: 15 }}>Users List</h2>
          {users.map((user) => (
            <Card key={user._id}>
              <Card.Body>
                <Card.Title>
                  {' '}
                  <b>Name: </b> {user.name}
                </Card.Title>
                <Card.Subtitle>
                  {' '}
                  <b>E-mail: </b> {user.email}
                </Card.Subtitle>
                <Card.Text>
                  {' '}
                  <b>Phone: </b> {user.phone}
                </Card.Text>
                <Button
                  variant="danger"
                  onClick={(e) => deleteUser(e, user._id)}
                >
                  Delete
                </Button>{' '}
                <Button variant="secondary">Edit</Button>{' '}
              </Card.Body>
            </Card>
          ))}
        </Container>
      </Row>
    </>
  )
}
