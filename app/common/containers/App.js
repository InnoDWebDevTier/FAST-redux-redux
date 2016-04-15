import React from 'react'
import CounterApp from './CounterApp'
import SidebarContainer from './SidebarContainer'
import PhotoContainer from './PhotoContainer'

const App = (props) => (
  <div>
    <SidebarContainer />
    <PhotoContainer />
    <CounterApp />
  </div>
);

export default App;
