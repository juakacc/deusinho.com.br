/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Blog do Deusinho',
    titleTemplate: '%s · The Real Hero',
    description:
      'Blog do Deusinho, saiba mais sobre mim, interaja comigo',
    url: 'https://deusinho.com.br', // No trailing slash allowed!
    image: '/perfil_deusinho.jpg', // Path to your image you placed in the 'static' folder
    // twitterUsername: '@occlumency',
  },
  plugins: ['gatsby-plugin-react-helmet'],
};
