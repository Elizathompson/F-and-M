import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
const ProductsPage = ({ data }) => (

  <Layout title="Products...">

    <div className="productsList">

      {data.allShopifyProduct.edges.map(({ node }) => (
        <div className="product" key={node.shopifyId}>

          <Link to={`/product/${node.handle}`}>
            <div className="mainProductImg">
              <img className="productImgTag"src={node.images[0].originalSrc}></img>
            </div>
            <h3 className="productTitle" >{node.title.toUpperCase()}</h3>
            <hr className="smallBreak"></hr>
            <p className="productPrice">£{node.priceRange.minVariantPrice.amount}</p>
          </Link>
        </div>

      ))}

    </div>
  </Layout>
)

export default ProductsPage

export const query = graphql`
{
  allShopifyProduct(sort: { fields: [title] }) {
    edges {
      node {
        title
        handle
        images {
          originalSrc
        }
        shopifyId
        description
        availableForSale
        priceRange {
          maxVariantPrice {
            amount
          }
          minVariantPrice {
            amount
          }
        }
      }
    }
  }
}
`
