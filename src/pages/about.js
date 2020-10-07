import React from 'react'
import Layout from '../components/layout'
import annie from '/Users/elizathompson/development/F-and-M/src/styles/assets/annie2.jpeg'
import granny from '/Users/elizathompson/development/F-and-M/src/styles/assets/grannyL.jpeg'
import eliza from '/Users/elizathompson/development/F-and-M/src/styles/assets/popsicleBeachPic.jpeg'

export default function About() {
  return (
    <Layout>
      <div className="aboutTitle">ABOUT US...</div>
      <hr className="pageBreak"></hr>
      <div className="tile is-ancestor wrapperTile">
        <div className="tile is-parent">
          <div className="tile is-child grandmaPic">
            <img src={annie} alt="Eliza's grandmother"></img>
          </div>
          <div className="tile is-child aboutWriting">
          Ferrier and Mansell is named after my two Grandmothers. It is a tribute to childhood summer holidays spent with them, when my lifelong passion for jewellery making began.
          </div>
          <div className="tile is-child grandmaPic">
            <img src={granny} alt="Eliza's grandmother"></img>
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child aboutWriting">
          Now I am transforming my archive into unquie gifts that recreate that unbeatable summer holiday state of mind. I combine my lifelong collection with the best quality gemstones, threads and fittings to create luxurious one-off designs.
          </div>
          <div className="tile is-child elizaPic">
            <img src={eliza} alt="Eliza"></img>
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child aboutWriting">
            Everything is independently sourced and handmade by me. Check out our bespoke page or our instagram to find out more about made to order options including reimagining your own jewellery.
          </div>

        </div>

      </div>






    </Layout>
  )
}
