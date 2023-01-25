import React, { useContext } from 'react';
import { SushiContext } from './sushiStore';

function Table() {
  const { state } = useContext(SushiContext);

  const emptyPlates = state.eatenSushis.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <>
      <h1 className="remaining">You have: ${state.totalMoney} remaining!</h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;