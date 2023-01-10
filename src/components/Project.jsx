import * as React from "react"
import { Link } from "gatsby"
import Picture from "./Picture"

const Project = (node) => {

  return (
    <div>
        <h2>{node.title}</h2>
        <p>{node.description.description}</p>
        {/* <Picture {...node.featuredImage}/>
        <Picture {...node.featuredImage2}/> */}
        <Picture {...node.featuredImage3}/>
        <Link to={node.slug}>Läs mer</Link>
    </div>
  )
}

export default Project