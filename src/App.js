import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import React from 'react';
import { render } from 'react-dom';
import Root from './client/components/root/Root';

const httpLink = new HttpLink({ uri: 'http://localhost:3000/graphql' });
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    fetchOptions: {
        mode: 'no-cors',
    },
});

render(
    <ApolloProvider client={client}>
        <Root />
    </ApolloProvider>,
    document.getElementById('root')
);
