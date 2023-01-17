import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <main>
    <article className="not-found">
      <h1>404-fel (Sidan kunde inte hittas)</h1>
      <h2>
      <Link to="/">Gå tillbaka till startsidan</Link>.
      </h2>
      </article>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
