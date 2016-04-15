import React, { Component, PropTypes } from 'react'

class PhotoDisplay extends Component {
  render() {
    const { photos } = this.props
    const photoNodes = photos.map(function(photo, i) {
      return (
        <div className="photo" key={i}>
          <img src={photo.url} alt={photo.desc} />
        </div>
      )
    })
    return (
      <div className="photoDisplay">
        {photoNodes}
      </div>
    )
  }
}

PhotoDisplay.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      desc: PropTypes.string,
    })
  ),
}

export default PhotoDisplay
