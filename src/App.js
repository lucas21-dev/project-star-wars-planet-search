import React from 'react';
import Header from './components/Header';
import Table from './components/Table';
import ContextProvider from './context/contextProvider';

function App() {
  return (
    <ContextProvider>
      <Header />
      <Table />
    </ContextProvider>
  );
}

export default App;
