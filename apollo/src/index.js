import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'

import { BrowserRouter } from 'react-router-dom'

const link = new HttpLink({ uri: 'http://localhost:4000/graphql' })
const cache = new InMemoryCache()
const client = new ApolloClient({ link, cache })

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>, document.getElementById('root'))
registerServiceWorker()
