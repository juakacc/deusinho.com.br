import fetch from 'cross-fetch';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// eslint-disable-next-line import/prefer-default-export
export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000',
    fetch,
  }),
  cache: new InMemoryCache(),
});
