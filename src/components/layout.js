import React from 'react'
import { Link, navigate } from 'gatsby'
import logo from '/Users/elizathompson/development/F-and-M/src/styles/assets/logo-without-name.jpeg'

const ListLinkVerticalRight = props => (
  <p style={{ display: 'flex', flexDirection: 'column', marginRight: '1rem' }}>
    <Link to={props.to}>{props.children}</Link>
  </p>
)
const ListLinkVertical = props => (
  <p style={{ display: 'flex', flexDirection: 'column' }}>
    <Link to={props.to}>{props.children}</Link>
  </p>
)

export default function Layout({ children }) {
  const [isActive, setisActive] = React.useState(false)

  const handleInstaClick = () => {
    navigate('https://www.instagram.com/ferrierandmansell/')
  }

  const handleFBClick = () => {
    navigate('https://www.instagram.com/ferrierandmansell/')
  }
  return (
    <>
      <div className="layoutContainer">



        <nav className="navbar" aria-label='main navigation'>
          {/* <div className="container"> */}

          <div className="navbar-brand">

            <div className="logoContainer navbar-item">
              <Link href='/'>
                <div className="logo title navbar-item">FERRIER <span>&</span> MANSELL</div>
              </Link>
            </div>

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
                <ListLinkVerticalRight className="navbar-item" to="/">HOME</ListLinkVerticalRight>
                <ListLinkVerticalRight className="navbar-item" to="/about/">ABOUT</ListLinkVerticalRight>
                <ListLinkVerticalRight className="navbar-item" to="/products/">SHOP</ListLinkVerticalRight>
                <ListLinkVerticalRight className="navbar-item" to="">CART</ListLinkVerticalRight>
              </ul>
            </div>

          </div>

          {/* </div> */}
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
        <hr className="pageBreak"></hr>
        <div className="footerLinks">
          <ListLinkVertical to="/ShippingReturns/">Shipping & Returns</ListLinkVertical>
          <ListLinkVertical to="/contact/">Contact</ListLinkVertical>
        </div>
        <div className="icons">
          <svg xmlns="http://www.w3.org/2000/svg" id="Bold" enableBackground="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" className="icon instaIcon" onClick={handleInstaClick}><path d="m12.004 5.838c-3.403 0-6.158 2.758-6.158 6.158 0 3.403 2.758 6.158 6.158 6.158 3.403 0 6.158-2.758 6.158-6.158 0-3.403-2.758-6.158-6.158-6.158zm0 10.155c-2.209 0-3.997-1.789-3.997-3.997s1.789-3.997 3.997-3.997 3.997 1.789 3.997 3.997c.001 2.208-1.788 3.997-3.997 3.997z"/><path d="m16.948.076c-2.208-.103-7.677-.098-9.887 0-1.942.091-3.655.56-5.036 1.941-2.308 2.308-2.013 5.418-2.013 9.979 0 4.668-.26 7.706 2.013 9.979 2.317 2.316 5.472 2.013 9.979 2.013 4.624 0 6.22.003 7.855-.63 2.223-.863 3.901-2.85 4.065-6.419.104-2.209.098-7.677 0-9.887-.198-4.213-2.459-6.768-6.976-6.976zm3.495 20.372c-1.513 1.513-3.612 1.378-8.468 1.378-5 0-7.005.074-8.468-1.393-1.685-1.677-1.38-4.37-1.38-8.453 0-5.525-.567-9.504 4.978-9.788 1.274-.045 1.649-.06 4.856-.06l.045.03c5.329 0 9.51-.558 9.761 4.986.057 1.265.07 1.645.07 4.847-.001 4.942.093 6.959-1.394 8.453z"/><circle cx="18.406" cy="5.595" r="1.439"/></svg>
          <svg height="30" viewBox="0 0 512 512" width="30" xmlns="http://www.w3.org/2000/svg" className="fbIcon icon" onClick={handleFBClick}><path d="m475.074219 0h-438.148438c-20.394531 0-36.925781 16.53125-36.925781 36.925781v438.148438c0 20.394531 16.53125 36.925781 36.925781 36.925781h236.574219v-198h-66.5v-77.5h66.5v-57.035156c0-66.140625 40.378906-102.140625 99.378906-102.140625 28.257813 0 52.542969 2.105469 59.621094 3.046875v69.128906h-40.683594c-32.101562 0-38.316406 15.253906-38.316406 37.640625v49.359375h76.75l-10 77.5h-66.75v198h121.574219c20.394531 0 36.925781-16.53125 36.925781-36.925781v-438.148438c0-20.394531-16.53125-36.925781-36.925781-36.925781zm0 0"/></svg>
        </div>
      </footer>
    </>
  )
}

