import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const BlogPostPreview = (props) => {
  return (
    <div className="blog-post-container">
      <img className="blog-image" src={props.image} />
      <h1 className="blog-title">{props.title}</h1>
      <h3 className="blog-description">{props.date}</h3>
      <p>{props.text}</p>
      <div className="read-more">
        <Link to="#">Read more</Link>
      </div>
    </div>
  )
}

BlogPostPreview.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default BlogPostPreview
