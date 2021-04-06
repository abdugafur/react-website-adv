import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButon] = useState(true)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false)

  const showButton = () =>{
    if(window.innerWidth <= 960){
      setButon(false)
    } else{
      setButon(true)
    }
  };

  useEffect(() =>{
    showButton()
  }, [])

  window.addEventListener("resize", showButton)

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>  TRVL <i className="fab fa-typo3"></i> </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nam-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className="nam-item">
              <Link to="/services" className="nav-links" onClick={closeMobileMenu}>Services</Link>
            </li>
            <li className="nam-item">
              <Link to="/products" className="nav-links" onClick={closeMobileMenu}>Products</Link>
            </li>
            <li className="nam-item">
              <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>Sign up</Link>
            </li>
          </ul>
          {
            button && <Button buttonStyle="btn--outline">Sign up</Button>
          }
        </div>
      </nav>
    </>
  )
}

export default Navbar
