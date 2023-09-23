import React from 'react';
import './content.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-content'>
        <div className='header-left' style={{ margin: '0 20px' }}>
          <h2 className='left'>header left side</h2>
        </div>
        <div className='header-center'>
          <h2>header center</h2>
        </div>
        <div className='header-right' style={{ margin: '0 20px' }}>
          <h2 className='right'>header right side</h2>
          <h3 className='shashi' style={{ margin: '0 50px'}}>shashi</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
