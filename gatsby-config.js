module.exports = {
  siteMetadata: {
    title: 'Blog do Deusinho',
    titleTemplate: '%s · The Real Hero',
    description:
      'Blog do Deusinho, saiba mais sobre mim, interaja comigo',
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
        url: 'http://localhost:4000',
        refetchInterval: 60,
      },
    }],
};
