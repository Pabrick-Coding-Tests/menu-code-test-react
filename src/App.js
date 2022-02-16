import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Root from './client/components/root/Root';
import store from './client/store';

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
        <Provider store={store}>
            <Root />
        </Provider>
    </ApolloProvider>,
    document.getElementById('root')
);
