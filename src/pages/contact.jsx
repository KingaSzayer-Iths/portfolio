import * as React from "react"
import { Link, graphql } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"
import '../style/style.css'
import Picture from "../components/Picture"

const Contact = ({data}) => {

    const node = data.contentfulContact

  return (
    <>
    <div class="wrapper">
        <Header/>
        <main>
            <h1>Kontakt</h1>
                <div>
                    <h2>{node.title}</h2>
                    <Picture {...node.featuredImage}/>
                    <p>{node.ePost}</p>
                    <a href={node.github}>Till Github</a>
                    <a href={node.linkedin}>Till Linkedin</a>
                </div>
        </main>
        <Footer/>
    </div>
    </>
    )
}

export default Contact

export const Head = () => <title>Kontakt</title>

// GraphQL Query
export const query = graphql`
query ContactQuery {
  contentfulContact {
    title
    ePost
    github
    linkedin
    featuredImage {
      gatsbyImage(formats: WEBP, width: 1000, outputPixelDensities: [1,1])
      url
    }
  }
}`
