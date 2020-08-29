import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './client';

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
);
