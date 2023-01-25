import React from 'react';
import SushiContainer from './SushiContainer';
import Table from './Table';
import { SushiProvider } from './sushiStore';
import SushiWallet from './SushiWallet';

function App() {
  return (
    <SushiProvider>
      <div className="app">
        <SushiWallet />
        <SushiContainer />
        <Table />
      </div>
    </SushiProvider>
  );
}

export default App;