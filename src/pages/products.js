import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const ProductsPage = ({ data }) => (
  <Layout>
    <div className="productsList">
      <ul>
        {data.allShopifyProduct.edges.map(({ node }) => (
          <div className="card product" key={node.shopifyId}>
            <li >
              <h3>
                <Link className="productTitle" to={`/product/${node.handle}`}>{node.title}</Link>
                <div className="mainProductImg">
                  <img className="productImgTag"src={node.images[0].originalSrc}></img>
                </div>
              </h3>
              <p>{node.description}</p>
              <p className="productPrice">£{node.priceRange.minVariantPrice.amount}</p>

            </li>
          </div>
        ))}
      </ul>
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
