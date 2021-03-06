import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <StaticImage 
        alt="Health Ledger as The Joker" 
        src="../images/thejoker.jpeg"
      />
    </Layout>
  )
}

// Step 3: Export your Component
export default AboutPage