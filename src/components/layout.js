import React from 'react'
import { Link } from 'gatsby'
import logo from '/Users/elizathompson/development/F-and-M/src/styles/assets/logo-without-name.jpeg'

const ListLinkVerticalRight = props => (
  <li style={{ display: 'flex', flexDirection: 'column', marginRight: '1rem' }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)
const ListLinkVertical = props => (
  <li style={{ display: 'flex', flexDirection: 'column', marginRight: '1rem' }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children, title }) {
  const [isActive, setisActive] = React.useState(false)
  return (
    <>
      <div className="layoutContainer">


        <div className="logoContainer">
          <Link href='/'>
            <div className="logo title navbar-item">FERRIER <span>&</span> MANSELL</div>
          </Link>
        </div>

        <nav className="navbar" aria-label='main navigation'>
          <div className="container">

            <div className="navbar-brand">


              <a
                onClick={() => {
                  setisActive(!isActive)
                }}
                role='button'
                className={`navbar-burger burgs ${isActive ? 'is-active' : ''}`}
                aria-label='menu'
                aria-expanded='false'
                data-target='navbarBasicExample'
              >
                <span aria-hidden='true'></span>
                <span aria-hidden='true'></span>
                <span aria-hidden='true'></span>
              </a>

            </div>

            <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>

              <div className='navbar-end'>
                <ul className='navbar-item'>
                  <ListLinkVerticalRight className="navbar-item" to="/">Home</ListLinkVerticalRight>
                  <ListLinkVerticalRight className="navbar-item" to="/about/">About</ListLinkVerticalRight>
                  <ListLinkVerticalRight className="navbar-item" to="/products/">Shop</ListLinkVerticalRight>
                </ul>
              </div>

            </div>

          </div>
        </nav>
      </div>


      {/* <div className="photoHeader">
        <p>{title}</p>
      </div> */}
      <div className="generalContainer">
        <div className="layoutContainer">
          <hr className="pageBreak"></hr>
          {children}
        </div>




      </div>
      <footer>
        <ul className="footerLinks">
          <ListLinkVertical to="/FAQs/">FAQs</ListLinkVertical>
          <ListLinkVertical to="/contact/">Contact</ListLinkVertical>
        </ul>
      </footer>
    </>
  )
}
