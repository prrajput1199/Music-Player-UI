import React from 'react';

const Tab = ({ istoptrack, setistoptrack }) => {
  return (
    <nav className='nav'>
      <button onClick={() => setistoptrack(false)} className='tab' style={{
        opacity : istoptrack ? "60%" : "100%" 
      }}>For You</button>
      <button onClick={() => setistoptrack(true)} className='tab' style={{
        opacity : istoptrack ? "100%" : "60%" 
      }}>Top Tracks</button>
    </nav>
  );
};

export default Tab;
