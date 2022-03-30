module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: 'Juneteenth Freedom Celebration 2022',
      menuLinks:[
        {
          name:'Home',
          link:'/'
        },
        {
          name:'Vendor Application',
          link:'/vendor-landing'
        },
        {
          name:'Donate',
          link:'/donate'
        }
      ]
  },
  plugins: [{
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
      {
      resolve: `gatsby-plugin-paypal`,
      options: {
        clientId: `ARfEsnVe8LGHPiUhzLiisSypGrf08N5XP8QA9aXqFAaB6enU3Yj4IvI2NQ8_jWdt03_HQEqkRrhCESxV`,
      }
    },]
};