import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Menu from './Menu';
import Content from './Content';

export default function App() {
  return (
    <Router>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <Header />
        <div
          style={{
            display: 'flex',
            flex: 1,
            backgroundColor: 'maroon', // Set the background color for the right side
          }}
        >
          <Menu />
          <Routes>
            <Route path="/" element={<Content />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
