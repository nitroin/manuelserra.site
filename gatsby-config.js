module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Manuel Serra | Fullstack DevOpser",
        short_name: "mserra",
        start_url: "/",
        background_color: "#1d1d1d",
        theme_color: "#1d1d1d",
        display: "minimal-ui",
        icon: "static/favicon/octocat.png"
      }
    },
    `gatsby-plugin-offline`
  ]
};
