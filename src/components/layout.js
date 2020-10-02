import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)
const ListLinkHorizontal = props => (
  <li style={{ display: `flex`, flexDirection: 'column', marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div className="layoutContainer">
      <header>

        <ul className="navBar links">
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/products/">Shop</ListLink>
        </ul>

        <Link to="/">
          <h2 className="navBar logo">FERRIER <span>&</span> MANSELL</h2>
        </Link>


      </header>
      {children}
      <footer>
      <ul classname="footerLinks">
          <ListLinkHorizontal to="/FAQs/">FAQs</ListLinkHorizontal>
          <ListLinkHorizontal to="/contact/">Contact</ListLinkHorizontal>
        </ul>
      </footer>
    </div>
  )
}
