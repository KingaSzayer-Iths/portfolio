import * as React from "react"
import { Link, graphql } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"
import '../style/style.css'
import Picture from "../components/Picture"
import arrowLeft from "../images/arrow-up32x32.png"
import ellipseNavigator from "../images/ellipse-navigator.png"

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


                    {/* <div id="carousel-container">
                    <div></div>
                      <input class="sel" id="in1" type="radio" name="position" />
                      <input class="sel" id="in2" type="radio" name="position" />
                      <input class="sel" id="in3" type="radio" name="position" />
                      <section id="carousel">
                        <div class="item"><Picture {...node.featuredImage}/></div>
                        <div class="item"><Picture {...node.featuredImage2}/></div>
                        <div class="item"><Picture {...node.featuredImage3}/></div>
                      </section>
                    </div> */}

                    
                    <div id="carousel-container">
                    <div></div>
                    <div class="slider">
                    {/* <div></div> */}

                    
                      {/* <input class="sel" id="in1" type="radio" name="position" />
                      <input class="sel" id="in2" type="radio" name="position" />
                      <input class="sel" id="in3" type="radio" name="position" /> */}
                      <div class="slides">
                      {/* <div id="slide-1">1</div> */}
                        <div id="slide-1"><Picture {...node.featuredImage}/></div>
                        <div id="slide-2"><Picture {...node.featuredImage2}/></div>
                        <div id="slide-3"><Picture {...node.featuredImage3}/></div>
                      </div>
                      <a href="#slide-1"><img src={ellipseNavigator} alt="Navigation icon " /></a>
                    <a href="#slide-2"><img src={ellipseNavigator} alt="Navigation icon " /></a>
                    <a href="#slide-3"><img src={ellipseNavigator} alt="Navigation icon " /></a>
                    </div>
                    </div>

                    {/* <a href={node.webAddress}>Till projektet</a> */}
                </div>
            
            <div id="back-button"><Link  to="/projects/"><img src={arrowLeft} alt="Back button " /></Link></div>
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
