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
import {useState} from "react"
import Hamburger from "./Hamburger"

const Nav = () => {

  const [hamburgerOpen, setHamburgerOpen] = useState( false )

  const toggleHamburger = () => {
    setHamburgerOpen( !hamburgerOpen)
  }

  return (<>
    <nav>
        <ul className="navigation">
            <li><Link to="/">Hem</Link></li>
            <li><Link to="/about">Om mig</Link></li>
            <li><Link to="/contact">Kontakt</Link></li>
            <li><Link to="/projects">Projekt</Link></li>
        </ul>
        <div className="hamburger" onClick={toggleHamburger}>
        <Hamburger isOpen={hamburgerOpen} />
        </div>
    </nav>

    <style jsx>{
      `@media only screen and (max-width: 480px){
        .navigation {
          display: ${hamburgerOpen ? 'flex' : 'none'};
          background-color: lightgrey;
          {/* height: 94vh; */}
          width: 40vw;
          margin-top: 50px;
          flex-direction: column;
          gap: 5px;
          position: absolute;
          right: 0px;
          font-size: 1.7rem;
          z-index: 99;
          border-radius: 10px;
        }

        .navigation li {
          margin-top: 5px;
        }

        .navigation a {
         color: black;
        }
      }`
    }</style>
  </>)
}

export default Nav
