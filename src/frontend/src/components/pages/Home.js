import React from 'react';
import { Link } from "react-router-dom";

import {
  PAGEX
} from '../../var/routes';

const Home = () => {
  return(
    <div className="container">
        <h1>Hello World</h1>
        <button>
          <Link to={PAGEX}>Go To PageX</Link>
        </button>
    </div>
  )
}

export default Home;
