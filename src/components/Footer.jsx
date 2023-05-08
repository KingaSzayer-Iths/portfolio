import * as React from "react"
import arrowUp from "../images/arrow-up32x32.png"


const Footer = () => {
  return (
    <div className="copy-bottom">
      <p>Copyright &copy; Kinga Szayer, {(new Date().getFullYear())}</p>
      <a href="#" id="fab"><img src={arrowUp} alt="Scroll to top " /></a>
   </div>
  )
}

export default Footer
