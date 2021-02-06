require(`dotenv`).config({
  path: `.env`,
})
const path = require('path')
const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
    siteMetadata: {
      // Used for the title template on pages other than the index site
      siteTitle: `Damla Köksal`,
      // Default title of the page
      siteTitleAlt: `Damla Köksal's Personal Website`,
      // Can be used for e.g. JSONLD
      siteHeadline: `Damla Köksal's Personal Website`,
      // Will be used to generate absolute URLs for og:image etc.
      siteUrl: `https://damlakoksal.com`,
      // Used for SEO
      siteDescription: `Damla Köksal's Personal Website.`,
      // Will be set on the <html /> tag
      siteLanguage: `en`,
      // Used for og:image and must be placed inside the `static` folder
      siteImage: `/banner.jpg`,
      // Twitter Handle
      author: `@damlakoksal`,

  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `Contact`,
            slug: `/contact`,
          },
        ],
        externalLinks: [
          {
            name: `Github`,
            url: `https://www.github.com/damla`,
          },
          {
            name: `Twitter`,
            url: `https://twitter.com/damlakoksal`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/drinkingmyjava`,
          },
          {
            name: `Linkedin`,
            url: `https://www.linkedin.com/in/damlakoksal`,
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
