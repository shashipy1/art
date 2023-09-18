import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Footer/Footer';


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}





// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './Header';
// import Menu from './Menu';
// import Content from './Content';

// export default function App() {
//   return (
//     <Router>
//       <div
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           height: '100vh',
//         }}
//       >
//         <Header />
//         <div
//           style={{
//             display: 'flex',
//             flex: 1,
//             backgroundColor: 'maroon', // Set the background color for the right side
//           }}
//         >
//           <Menu />
//           <Routes>
//             <Route path="/" element={<Content />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }
