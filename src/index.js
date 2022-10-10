import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {ApolloClient,ApolloProvider, InMemoryCache} from '@apollo/client'
import { BrowserRouter } from 'react-router-dom';

const client = new ApolloClient({
  uri:'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
})

//https://rickandmortyapi.com/graphql

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
  </React.StrictMode>
);
