module.exports = {
  siteMetadata: {
    title: `bigcreator.dev`,
    description: `A bigcreator.dev site.`,
    author: `@iamjosafatmtz`,
    siteUrl: `https://www.bigcreator.dev`,
    menuLinks: [
      { name: "About Us 👋🏻", link: "#about" },
      { name: "Services 🧑🏻‍💻", link: "#services" },
      { name: "#bigcreatorteam", link: "#team" },
      { name: "Contact Us ☎️", link: "#contact" },
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
