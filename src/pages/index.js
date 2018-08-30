import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to my Gatsby site.</p>
    <p>I am TJ Sornet - a SF bay area based full stack web developer proficient in MEAN stack but also dabble a little with Python.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
