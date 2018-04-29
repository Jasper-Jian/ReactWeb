import React from 'react'
import { BrowserRouter as Router, withRouter } from 'react-router-dom'
import { Route, Redirect } from 'react-router'
import Container from './container'
import Login from './pages/login'
import fakeAuth from './utils/fakeAuth'
//import createBrowserHistory from 'history/createBrowserHistory'

//const customHistory = createBrowserHistory()

const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated ? (
    <Redirect to='/' />
  ) : (
    <Redirect to='/login' />
  )
))

const routes = (
  <Router  >
    <div>
      <AuthButton/>
      <Route path="/" component={Container} />
      <Route path="/login" component={Login} />
      <Redirect from='*' to='/login' />
    </div>
  </Router>
)

export default routes;
