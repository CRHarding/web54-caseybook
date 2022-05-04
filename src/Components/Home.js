import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <nav>
        <Link to="/post">CREATE A POST</Link>
        <Link to="/profile">PROFILE</Link>
      </nav>
      <header>
        <h1>Welcome to CaseyBook</h1>
        <h2>It's like Facebook only made by some guy named Casey</h2>
      </header>
    </div>
  )
}

export default Home;