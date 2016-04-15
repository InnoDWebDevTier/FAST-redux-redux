import React, { Component, PropTypes } from 'react'

class Sidebar extends Component {
  render() {
    const { items } = this.props
    const sidebarItems = items.map(function(item, i) {
      return (
        <li key={i}><a className="sidebar-link" href={item.url}>{item.text}</a></li>
      )
    })
    return (
      <div className="sidebar">
        <ul>
          {sidebarItems}
        </ul>
      </div>
    )
  }
}

Sidebar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
}

export default Sidebar
