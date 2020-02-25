import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import TaskManager from './components/TaskManager';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>GraphQL Demo</h1>
        <TaskManager />
      </div>
    </ApolloProvider>
  );
}

export default App;
