import * as React from "react"
import { Link, graphql } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"
import '../style/style.css'
import Project from "../components/Project"
import arrowUp from "../images/arrow-up32x32.png"


const Projects = ({data}) => {
  return (
    <>
    <div class="wrapper">
        <Header/>
        <main>
            <h1>Projekt</h1>
            <aside className="project-button">
              {/* <ul>
                <li><a href="/projects/figma-sinus/">Figma</a></li>
                <li><a href="/projects/native-javascript-star-wars/">Java Script</a></li>
                <li><a href="/projects/react-fullstack-recipe/">React</a></li>
                <li><a href="/projects/umbraco-running-dogs/">Umbraco</a></li>
                <li><a href="/projects/vue-e-wallet/">Vue</a></li>
                <li><a href="/projects/wordpress-polska-desserter/">WordPress</a></li>
              </ul> */}
              <ul>
                {data.allContentfulProject.edges.map(({node}) => (
                  <li><a href={"#"+node.slug}>{node.category.categoryName}</a></li>
                ))}
              </ul>
            </aside>
            {/* Loops all projects and creates Project component */}
            {data.allContentfulProject.edges.map(({node}) => (
              <>
                <Project key={node.contentful_id} {...node}/>
              </>
            ))}
            {/* <a href="#" id="fab"><img src={arrowUp} alt="Scroll to top " /></a> */}
        </main>
        <Footer/>
    </div>
    </>
    )
}

export default Projects

// GraphQL Query
// Project sorted on title ascending
export const query = graphql`
query MyQuery {
  allContentfulProject(sort: {title: ASC}) {
    edges {
      node {
        slug 
        title
        category {
          categoryName
          slug
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
