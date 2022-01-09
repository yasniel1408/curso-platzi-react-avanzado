import ReactDOM from 'react-dom';
import { App } from 'App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { AuthProvider } from 'context/AuthProvider';

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  uri: 'https://petgram-server-livid.vercel.app/graphql',
  name: 'react-web-client',
  version: '1.3',
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});

ReactDOM.render(
  <AuthProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AuthProvider>,
  document.getElementById('root'),
);
