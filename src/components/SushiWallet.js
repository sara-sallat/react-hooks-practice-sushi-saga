import React, { useContext, useState } from 'react';
import { SushiContext, ACTIONS } from './sushiStore';

function SushiWallet() {
  const { state, dispatch } = useContext(SushiContext);
  const [addedMoney, setAddedMoney] = useState(0);

  function handleChange(e) {
    setAddedMoney(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({ type: ACTIONS.ADDMONEY, payload: addedMoney });
  }

  return (
    <>
      <h1>Sushi Wallet</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={addedMoney}
          onChange={handleChange}
          min="0"
        />
        <button>Add money to your wallet</button>
      </form>
    </>
  );
}

export default SushiWallet;