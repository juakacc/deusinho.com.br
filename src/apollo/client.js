import fetch from 'cross-fetch';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

import { apiUrl } from '../../config';

// eslint-disable-next-line import/prefer-default-export
export const client = new ApolloClient({
  link: new HttpLink({
    uri: apiUrl,
    fetch,
  }),
  cache: new InMemoryCache(),
});
