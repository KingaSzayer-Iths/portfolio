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
            <h1>Kategori</h1>
{/* Loops all projects and creates Project component */}
            {data.allContentfulProject.edges.map(({node}) => (
              <>
              <p>{node.category.categoryName}</p>
              <Project key={node.contentful_id} {...node}/>
              </>
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
query MyQuery($slug: String) {
  allContentfulProject(filter: {category: {slug: {eq: $slug}}}) {
    edges {
      node {
        slug 
        title
        category {
          categoryName
        }
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
