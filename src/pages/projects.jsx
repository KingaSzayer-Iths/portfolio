import * as React from "react"
import { Link, graphql } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"
import '../style/style.css'
import Project from "../components/Project"

const Projects = ({data}) => {
  return (
    <>
    <div class="wrapper">
        <Header/>
        <main>
            <h1>Projekt</h1>
            {data.allContentfulProject.edges.map(({node}) => (
                <article key={node.contentful_id}>
                    <Project {...node}/>
                </article>
            ))}
        </main>
        <Footer/>
    </div>
    </>
    )
}

export default Projects

// GraphQL Query
export const query = graphql`
query MyQuery {
    allContentfulProject {
    edges {
      node {
        slug 
        title
        description {
          description
        }
        featuredImage {
          url
          gatsbyImage(formats: WEBP, 
            width: 1000, 
            outputPixelDensities: [1,1])
        }
        featuredImage2 {
          url
          gatsbyImage(formats: WEBP, 
            width: 1000, 
            outputPixelDensities: [1,1])
        }
        featuredImage3 {
          url
          gatsbyImage(formats: WEBP, 
            width: 1000, 
            outputPixelDensities: [1,1])
        }
      }
    }
  }
}
`;
