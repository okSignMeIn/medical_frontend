import React from 'react';
import Header from './Header/Header';
import './Body.css';

function Body({ children }) {
  return (
    <div className="Body">
      <Header />
      {children}
    </div>
  );
}

export default Body;
