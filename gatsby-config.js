const { apiUrl } = require('./config');

module.exports = {
  siteMetadata: {
    title: 'Blog do Deusinho',
    titleTemplate: '· %s ·',
    description:
      'Blog do Deusinho, saiba mais sobre mim, conheça minhas ideias, interaja comigo!',
    url: 'https://deusinho.com.br',
    image: '/perfil_deusinho.jpg',
    // twitterUsername: '@occlumency',
  },
  plugins: ['gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'SWAPI',
        fieldName: 'swapi',
        url: apiUrl,
        refetchInterval: 60,
      },
    }],
};
