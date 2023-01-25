import React, { createContext, useReducer, useMemo } from 'react';

export const SushiContext = createContext();

export const ACTIONS = {
  INIT: 'INIT',
  FETCH: 'FETCH',
  MORE: 'MORE',
  EAT: 'EAT',
  ADDMONEY: 'ADDMONEY',
};

const initialState = {
  sushis: [],
  isLoading: true,
  sushiIndex: 0,
  eatenSushis: [],
  totalMoney: 100,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INIT:
      return { ...state, isLoading: true };
    case ACTIONS.FETCH:
      return { ...state, sushis: action.payload, isLoading: false };
    case ACTIONS.MORE:
      if (state.sushiIndex + 4 >= state.sushis.length) {
        return { ...state, sushiIndex: 0 };
      } else {
      }
      return { ...state, sushiIndex: state.sushiIndex + 4 };
    case ACTIONS.EAT:
      if (
        !state.eatenSushis.some((s) => s.id === action.payload.id) &&
        state.totalMoney > action.payload.price
      ) {
        return {
          ...state,
          eatenSushis: [...state.eatenSushis, action.payload],
          totalMoney: state.totalMoney - action.payload.price,
        };
      } else {
        return state;
      }
    case ACTIONS.ADDMONEY:
      return {
        ...state,
        totalMoney: state.totalMoney + parseInt(action.payload),
      };
    default:
      return state;
  }
};

export const SushiProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <SushiContext.Provider value={contextValue}>
      {children}
    </SushiContext.Provider>
  );
};