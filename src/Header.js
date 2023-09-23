import React from 'react';
import './menu.css';

const Home = () => {
  return (
    <div className='main-container'>
      <div className='first-container'>
      <div className='question' id='question-1'>
        question-1
      </div>
      <div className='question' id='question-2'>
        question-1
      </div>
      </div>
      <div className='second-container'>
        <div className='question' id='question-3'>
          question-1
        </div>
        <div className='question' id='question-4'>
          question-1
        </div>
      </div>
    </div>
  );
};

export default Home;
