import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col text-center'>
          <h1 className='h1'>Welcome to PUBLIC LIBRARY</h1>
          <p className='p'>Manage your books and Author Details</p>
          <div className="tg">
            <button className='btn btn-primary m-2'><Link to={`/dashboard`}>Dashboard</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;