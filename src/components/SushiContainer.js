import MoreButton from './MoreButton';
import Sushi from './Sushi';
import React, { useContext, useEffect } from 'react';
import { SushiContext, ACTIONS } from './sushiStore';

function SushiContainer() {
  const { state, dispatch } = useContext(SushiContext);

  useEffect(() => {
    const API = 'http://localhost:3001/sushis';

    dispatch({ type: ACTIONS.INIT });

    fetch(API)
      .then((r) => r.json())
      .then((data) => {
        dispatch({ type: ACTIONS.FETCH, payload: data });
      });
  }, []);

  const sushiList = state.sushis
    .filter((item, index) => {
      return index >= state.sushiIndex && index < 4 + state.sushiIndex;
    })
    .map((sushi) => <Sushi key={sushi.id} sushi={sushi} />);

  return (
    <div className="belt">
      {state.isLoading ? 'Loading...' : sushiList}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;