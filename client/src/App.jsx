import { Container } from 'react-bootstrap'
import { BrowserRouter, BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import NotFound from './pages/NotFound'
import ListUsers from '../src/pages/ListUsers'
import AddUsers from '../src/pages/AddUsers'
import EditUsers from '../src/pages/EditUsers'
import NavBar from './layouts/Navbar'

export default function App() {
  return (
    <BrowserRouter>
      <Router>
        <NavBar />
        <main className="py-4 main-container">
          <Container>
            <Switch>
              <Route path="/" component={ListUsers} exact={true} />
              <Route path="/addUsers" component={AddUsers} />
              <Route path="/editUsers" component={EditUsers} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Container>
        </main>
      </Router>
    </BrowserRouter>
  )
}
