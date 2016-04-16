import { Route, IndexRoute } from 'react-router'
import React from 'react'
import App from './containers/App'
import CounterApp from './containers/CounterApp'
import SidebarContainer from './containers/SidebarContainer'
import PhotoContainer from './containers/PhotoContainer'

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={CounterApp} />
    <Route path="sidebar" component={SidebarContainer}/>
    <Route path="photo" component={PhotoContainer}/>
  </Route>
);

export default routes;
