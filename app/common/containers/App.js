import React from 'react'
import CounterApp from './CounterApp'
import SidebarContainer from './SidebarContainer'
import PhotoContainer from './PhotoContainer'

const App = (props) => (
  <div>
    {props.children}
  </div>
);

export default App;
