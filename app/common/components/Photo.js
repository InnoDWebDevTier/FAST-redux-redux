import React, { PropTypes } from 'react'

const Photo = props => <img src={props.url} alt={props.desc} className="photo" />

Photo.propTypes = {
  url: PropTypes.string.isRequired,
  desc: PropTypes.string,
}

export default Photo
