import React from "react"
import Layout from "../components/layout"
import "../styles/mystyles.scss"

export default function Home() {
  return(
    <Layout>
      <div className="logoImg">
        <img src="src/styles/assets/mainLogo.png" alt="logo"></img>
      </div>
    </Layout>
  )
}
