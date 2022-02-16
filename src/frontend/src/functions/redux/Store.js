import React, { createContext, useReducer } from 'react'

import reducers from './reducers';
import initialStates from './initialStates';

const Store = ( {children} ) => {
  const [state, dispatch] = useReducer(reducers, initialStates);
  return(
    <Context.Provider value={[state, dispatch]} >
      {children}
    </Context.Provider>
  )
}

export const Context = createContext(initialStates);

export default Store;
