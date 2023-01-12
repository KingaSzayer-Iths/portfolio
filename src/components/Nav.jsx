import * as React from "react"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <nav>
        <ul>
            <li><Link to="/">Hem</Link></li>
            <li><Link to="/about">Om mig</Link></li>
            <li><Link to="/contact">Kontakt</Link></li>
            <li><Link to="/projects">Projekt</Link></li>
        </ul>
    </nav>
  )
}

export default Nav
