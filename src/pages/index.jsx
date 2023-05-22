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
        <div className="page-title">
          <h1>Portfolio</h1>
        </div>
        
            <article className="container">
              <div className="snurr">
                <h5 class="text-location">HTML</h5>
                <h5 class="text-location">CMS</h5>
                <h5 class="text-location">CSS</h5>
                <h5 class="text-location">JS</h5>
                </div>
              <div className="centered">
                <h2>{node.title}</h2>
                <p>{node.description.description}</p>
              </div>
              
              <div className="image-top"></div>
              <Picture {...node.featuredImage}/>
            </article>
            
            <div className="image-top"></div>
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
