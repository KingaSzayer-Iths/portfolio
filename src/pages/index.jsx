import * as React from "react"
import { Link, graphql } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"
import '../style/style.css'
import Picture from "../components/Picture"

const IndexPage = ({data}) => {

  const node = data.contentfulHome

  return (
    <>
    <div class="wrapper">
      <Header/>
      <main>
        <h1>Portfolio Home</h1>
                <div>
                    <h2>{node.title}</h2>
                    <p>{node.description.description}</p>
                    <Picture {...node.featuredImage}/>
                </div>
      </main>
      <Footer/>
    </div>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Portfolio Home</title>

// GraphQL Query
export const query = graphql`
query HomeQuery {
  contentfulHome {
    title
    description {
      description
    }
    featuredImage {
      gatsbyImage(formats: WEBP, width: 1000, outputPixelDensities: [1,1])
      url
    }
  }
}`
