import * as React from "react"
import { Link, graphql } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"
import '../style/style.css'

const About = ({data}) => {

    const node = data.contentfulAbout
  
    return (
    <>
    <div class="wrapper">
        <Header/>
        <main>
            <h1>Om mig</h1>
                <div>
                    <h2>{node.name}</h2>
                    <p>{node.description.description}</p>
                    <picture>
                        <source srcset={node.featuredImage.gatsbyImage.images.fallback.srcSet} 
                            sizes={node.featuredImage.gatsbyImage.images.fallback.sizes} type="image/webp" />
                        <img src={node.featuredImage.url} alt="" />
                    </picture>
                </div>
        </main>
        <Footer/>
    </div>
    </>
    )
}

export default About

export const Head = () => <title>Om mig</title>

// GraphQL Query
export const query = graphql`
query AboutQuery {
    contentfulAbout {
    name
    description {
      description
    }
    featuredImage {
      gatsbyImage(formats: WEBP, width: 1000, outputPixelDensities: [1,1])
      url
    }
  }
}`
