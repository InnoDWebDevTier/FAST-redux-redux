import React from 'react'
import Navbar from '../components/Navbar'

const App = (props) => (
  <div>
    <Navbar />
    {props.children}
  </div>
);

export default App;
