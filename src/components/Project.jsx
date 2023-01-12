import * as React from "react"
import { Link } from "gatsby"
import Picture from "./Picture"
import '../style/style.css'

const Project = (node) => {

  return (
    <article className="project-post"> 
        <h2>{node.title}</h2>
        {/* <Picture {...node.featuredImage}/>
        <Picture {...node.featuredImage2}/> */}
        <Picture {...node.featuredImage3}/>
        <div className="project-description">
        <p>{node.description.description}</p>
        </div>
        <Link to={node.slug}>..Se mer</Link>
    </article>
  )
}

export default Project