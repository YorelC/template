import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import {
  HOME,
  PAGEX
} from '../var/routes';

import Store from '../functions/redux/Store';

import Home from './pages/Home';
import PageX from './pages/PageX';


const App = () => {
  return(
    <Store>
      <BrowserRouter>
        <Routes>
          <Route exact path={HOME} element={<Home/>}/>
          <Route exact path={PAGEX} element={<PageX/>}/>
        </Routes>
      </BrowserRouter>
    </Store>
  )
}

export default App;
