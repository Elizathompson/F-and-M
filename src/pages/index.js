import React from 'react'
import Layout from '../components/layout'
import '../styles/mystyles.scss'
import { navigate } from 'gatsby'
import logo from '/Users/elizathompson/development/F-and-M/src/styles/assets/logo-without-name.jpeg'

export default function Home() {

  const handleClick = () => {
    navigate('/products')
  }
  return (
    <Layout>
      <div className="homeWrapper">
        <div className="logoImg">
          <img src={ logo } alt="logo"></img>
        </div>
        <button className="button personalButton" onClick={handleClick}>SHOP</button>
      </div>
    </Layout>
  )
}
