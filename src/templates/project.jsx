import * as React from "react"
import { Link, graphql } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"
import '../style/style.css'

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
                    <picture>
                        <source srcset={node.featuredImage.gatsbyImage.images.fallback.srcSet} 
                            sizes={node.featuredImage.gatsbyImage.images.fallback.sizes} type="image/webp" />
                        <img src={node.featuredImage.url} alt="" />
                    </picture>
                </div>
            
            <Link to="/projects/">Till projektöversiktssidan</Link>
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
    description {
      description
    }
    featuredImage {
      gatsbyImage(formats: WEBP, 
        width: 1000, 
        outputPixelDensities: [1,1])
      url
    }
  }
}
`;
