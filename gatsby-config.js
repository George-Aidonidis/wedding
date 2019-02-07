module.exports = {
  siteMetadata: {
    title: 'Dimitra - George',
    author: 'George Aidonidis',
    description: 'A countdown until our wedding',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'wedding',
        start_url: '/',
        background_color: '#052',
        theme_color: '#052',
        display: 'wedding',
        icon: 'src/images/fav.png',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
