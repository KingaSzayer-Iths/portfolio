// import * as React from "react"
// import { Link } from "gatsby"
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { Container, Navbar, Nav } from 'react-bootstrap'

// const Navx = ({siteTitle}) => {
//   return (
//     <Container>
//       <Navbar expand="md" bg="dark" variant="dark">
//             <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
//             <Navbar.Toggle aria-controls="navbarResponsive" />
//             <Navbar.Collapse id="navbarResponsive">
//               <Nav as="ul" className="ml-auto">
//                 <Nav.Item as="li">
//                   <Link to="/" className="nav-link" activeClassName="active">Hem</Link>
//                 </Nav.Item>
//                 <Nav.Item as="li">
//                   <Link to="/about" className="nav-link" activeClassName="active">Om mig</Link>
//                 </Nav.Item>
//                 <Nav.Item as="li">
//                   <Link to="/contact" className="nav-link" activeClassName="active">Kontakt</Link>
//                 </Nav.Item>
//                 <Nav.Item as="li">
//                   <Link to="/projects" className="nav-link" activeClassName="active">Projekt</Link>
//                 </Nav.Item>
//               </Nav>
//             </Navbar.Collapse>
//           </Navbar>
//     </Container>
    
//   )
// }

// export default Navx



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
