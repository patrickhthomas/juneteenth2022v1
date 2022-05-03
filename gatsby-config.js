require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.juneteenthfreedomcelebration.com`,
    title: 'Juneteenth Freedom Celebration 2022',
      menuLinks:[
        {
          name:'Home',
          link:'/'
        },
        {
          name:'2022 Vendor List',
          link:'/special-thanks'
        },
        {
          name:'Donate',
          link:'/donate'
        },
        {
          name:'Vendor Application',
          link:'/vendors'
        }
      ]
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `33dc691qtkxr`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: 'UH3qyS3PFVftKdfy7qrDuHxlLHJkbYhzi-HDVNmVW5o',
      },
    },
    {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "G-HSHZZ91818"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  `gatsby-plugin-sass`,
]
};