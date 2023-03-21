import * as React from "react"
import { Link } from "gatsby"
import Picture from "./Picture"
import '../style/style.css'

const Project = (node) => {

  return (
    <article id={node.slug} className="project-post"> 
        <h2>{node.title}</h2>
        {/* <Picture {...node.featuredImage}/>
        <Picture {...node.featuredImage2}/> */}
        <Picture {...node.featuredImage3}/>
        <div className="project-description">
          <p>{node.description.description}</p>
        </div>
        <div className="links">
        <div className="show-more">
          <Link to={node.slug}>Mer...</Link>
        </div>
        <div className="show-more">
          <Link to={node.category.slug}>{node.category.categoryName}</Link>
        </div>
        </div>
        
    </article>
  )
}

export default Project