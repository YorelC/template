import React from 'react';

import { actions } from './actions';

const reducers = (state, action) => {
  switch (action.type) {
    case actions.NAME_OF_FIRST_ACTION:
      return {
        ...state,
        monState1: action.payload
      };
    case actions.NAME_OF_SECOND_ACTION:
      return {
        ...state,
        monState2: action.payload
      };

    default:
      return state;
  }
};

export default reducers;
