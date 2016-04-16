import React from 'react'
import { Link } from 'react-router'

const navbarItems = [
  "about",
  "lookbooks",
  "events",
  "blog",
  "sponsor"
]

const Navbar = (props) => {
  const navbarNodes = navbarItems.map((item, i) => (
    <li className="pure-menu-item" key={i}>
      <Link to={`/${item}`} className="pure-menu-link">{item}</Link>
    </li>
  ))
  return (
    <div className="home-menu pure-menu-horizontal">
      <ul className="pure-menu-list">
        {navbarNodes}
      </ul>
    </div>
  )
}

export default Navbar
