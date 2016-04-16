import React from 'react'
import BlogPostPreview from './BlogPostPreview'
import BlogSidebar from './BlogSidebar'

// In a real app, posts would be fetched from an API and passed in as a prop, from a store

const posts = [
  {
    title: "Countdown to X",
    image: "../img/cat.jpg",
    date: "March 16th, 2015",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
  },
  {
    title: "Post-traumatic Spring Break Disorder",
    image: "../img/teddy.jpg",
    date: "March 12th, 2015",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
  },
]

const Blog = (props) => {
  const blogPostPreviews = posts.map((post, i) => (
    <BlogPostPreview {...post} key={i} />
  ))
  return (
    <div className="container pure-g">
      <div className="blog-container pure-u-4-5">
        {blogPostPreviews}
      </div>
      <BlogSidebar />
    </div>
  )
}

export default Blog
