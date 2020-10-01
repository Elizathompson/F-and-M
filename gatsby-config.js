/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-shopify`,
      options: {
        // The domain name of your Shopify shop.
        shopName: `[ferrier-and-mansell]`,
        // The storefront access token
        accessToken: `[08d0a206a55cb940897486dfeb3544cb]`,
      },
    },
  ],
}
