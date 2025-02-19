import React from 'react'

const BlogDetails = ({params}) => {
  const blogDetails = params.slugs
  return (
    <div>blog number {blogDetails[0]} have {blogDetails[1]} reviews and {blogDetails[2]} comments</div>
  )
}

export default BlogDetails