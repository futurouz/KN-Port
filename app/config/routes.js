import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Home from "../components/Home"

const  routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Home}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

export default routes
