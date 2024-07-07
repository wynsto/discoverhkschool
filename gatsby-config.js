/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Discover HK School`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-styled-components", { 
    resolve: "gatsby-plugin-google-gtag",
    options: {
      "trackingIds": ["G-6TLC8058Y5"]
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};