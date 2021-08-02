import React from 'react';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import GetUser from "./components/GetUser";

// const errorLink = onError(({ graphqlErrors, networkErrorss }) => {
//   if(graphqlErrors) {
//     graphqlErrors.map(({ message, location, path }) => {
//       alert(`Graphql error ${message}`)
//     });
//   }
// })

const link = from([
  // errorLink,
  new HttpLink({ uri : "http://localhost:6969/graphql" })
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <GetUser />
    </ApolloProvider>
  );
}

export default App;
