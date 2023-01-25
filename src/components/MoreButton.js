import React, { useContext } from 'react';
import { SushiContext, ACTIONS } from './sushiStore';

function MoreButton() {
  const { dispatch } = useContext(SushiContext);

  function clickHandler() {
    dispatch({ type: ACTIONS.MORE });
  }

  return <button onClick={clickHandler}>More sushi!</button>;
}

export default MoreButton;
