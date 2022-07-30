module.exports = {
  siteMetadata: {
    title: `bigcreator.dev`,
    description: `A bigcreator.dev site.`,
    author: `@iamjosafatmtz`,
    siteUrl: `https://www.bigcreator.dev`,
    menuLinks: [
      { name: "Inicio", link: "#" },
      { name: "Quienes Somos", link: "#" },
      { name: "Que Hacemos", link: "#" },
      { name: "Nuestro Equipo", link: "#" },
    ],
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#F8F8F8`,
        theme_color: `#FFD51E`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/images`, // See below to configure properly
        },
      },
    },
  ],
};
