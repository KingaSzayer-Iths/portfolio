import * as React from "react"
import { Link, graphql } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"
import '../style/style.css'
import Picture from "../components/Picture"

const SingleProjectPage = ({data}) => {

    const node = data.contentfulProject

  return (
    <>
    <div class="wrapper">
        <Header/>
        <main>
        
            <h1>Projekt</h1>
                <div>
                    <h2>{node.title}</h2>
                    <p>{node.description.description}</p>
                    {/* <div className="screenshots">
                      <Picture {...node.featuredImage}/>
                      <Picture {...node.featuredImage2}/>
                      <Picture {...node.featuredImage3}/>
                    </div> */}
                    <div id="carousel-container">
                    <div></div>
                      <input class="sel" id="in1" type="radio" name="position" />
                      <input class="sel" id="in2" type="radio" name="position" />
                      <input class="sel" id="in3" type="radio" name="position" />
                      <section id="carousel">
                        <div class="item"><Picture {...node.featuredImage}/></div>
                        <div class="item"><Picture {...node.featuredImage2}/></div>
                        <div class="item"><Picture {...node.featuredImage3}/></div>
                      </section>
                    </div>
                    <a href={node.webAddress}>Till projektet</a>
                </div>
            
            <Link to="/projects/">Till alla projekt</Link>
        </main>
        <Footer/>
    </div>
    </>
    )
}

export default SingleProjectPage

// GraphQL Query
export const query = graphql`
query SingleProjectQuery($slug: String) {
  contentfulProject(slug: {eq: $slug}) {
    title
    webAddress
    description {
      description
    }
    featuredImage {
      gatsbyImage(formats: WEBP, 
        width: 1000, 
        outputPixelDensities: [1,1])
      url
    }
    featuredImage2 {
      gatsbyImage(formats: WEBP, 
        width: 1000, 
        outputPixelDensities: [1,1])
      url
    }
    featuredImage3 {
      gatsbyImage(formats: WEBP, 
        width: 1000, 
        outputPixelDensities: [1,1])
      url
    }
  }
}
`;
