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
            {/* <h1>Kontakt</h1> */}
                 <section className="contact-image">
                    {/* <Picture {...node.featuredImage}/> */}
                    <h2>{node.title}</h2>
                    <article className="contact-info">
                      <div className="contact-links">
                        <Picture {...node.featuredImage}/>
                        <div className="xlinks">
                          <a href={node.github}>Till Github</a>
                          <a href={node.linkedin}>Till Linkedin</a>
                        </div>
                      </div>
                      <p>{node.ePost}</p>
                      
                    </article>
                </section>
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
