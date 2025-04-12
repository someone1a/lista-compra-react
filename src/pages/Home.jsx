// Home page that links to shared lists
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Shared Lists</h1>
      <ul>
        <li>
          <Link to="/list/1">List 1</Link> (Shared)
        </li>
        <li>
          <Link to="/list/2">List 2</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
