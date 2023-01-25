import React, { useContext } from 'react';
import { SushiContext, ACTIONS } from './sushiStore';

function Sushi({ sushi }) {
  const { state, dispatch } = useContext(SushiContext);

  function handleEat() {
    dispatch({ type: ACTIONS.EAT, payload: sushi });
  }

  const eaten = state.eatenSushis.some((s) => s.id === sushi.id);

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEat}>
        {eaten ? null : (
          <img src={sushi.img_url} alt={sushi.name} width="100%" />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
