import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Layout from '../components/layout'

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext
  const title = product.title.toUpperCase()
  return (
    <Layout>
      <hr className="pageBreak"></hr>
      <h1 className="productTitle prodPage">{title}</h1>
      <hr className="pageBreak"></hr>
      <div className="columns is-centered">
        <div className="slider-container carouselContainer column">
          <Carousel className="carousel-style" dynamicHeight={true} showStatus={false} showThumbs={false}>
            {product.images.map(image =>(
              <div className="productImg" key={image.id}>
                <div className="slider-item-div">
                  <img className="carosel-pic" src={image.originalSrc} alt="product"></img>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="infoContainer column">

          <div className="productDescription">{product.description}</div>
          <hr className="pageBreak"></hr>
          <div className="buttons">
            <button className="button personalButton">Add to Cart</button>
            <button className="button personalButton">Enquire</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductTemplate
