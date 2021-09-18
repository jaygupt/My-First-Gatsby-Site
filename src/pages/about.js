import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="About Me">
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        <p>My favorite food is mac-and-cheese.</p>
        <p>My favorite vacation spot is Disneyland in Los Angeles, CA.</p>
      </Layout>
    </main>
  )
}

// Step 3: Export your Component
export default AboutPage