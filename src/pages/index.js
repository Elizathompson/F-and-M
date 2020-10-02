import React from 'react'
import Layout from '../components/layout'
import '../styles/mystyles.scss'
import logo from '/Users/elizathompson/development/F-and-M/src/styles/assets/logo-without-name.jpeg'

export default function Home() {
  return (
    <Layout>
      <div className="logoImg">
        <img src={ logo } alt="logo"></img>
      </div>
    </Layout>
  )
}
