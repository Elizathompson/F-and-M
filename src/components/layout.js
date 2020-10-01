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
        <Link to="/">
          <h3 className="navBar">FERRIER & MANSELL</h3>
        </Link>
        <ul className="navBar" style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/products/">Shop</ListLink>
        </ul>
      </header>
      {children}
      <footer>
      <ul>
          <ListLinkHorizontal to="/about/">FAQs</ListLinkHorizontal>
          <ListLinkHorizontal to="/contact/">Contact</ListLinkHorizontal>
        </ul>
      </footer>
    </div>
  )
}
