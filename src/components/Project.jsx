import * as React from "react"
import { Link } from "gatsby"

const Project = (node) => {
  return (
    <div>
        <h2>{node.title}</h2>
        <p>{node.description.description}</p>
        <picture>
            <source srcset={node.featuredImage.gatsbyImage.images.fallback.srcSet} 
                sizes={node.featuredImage.gatsbyImage.images.fallback.sizes} type="image/webp" />
            <img src={node.featuredImage.url} alt="" />
        </picture>
        <Link to={node.slug}>Läs mer</Link>
    </div>
  )
}

export default Project