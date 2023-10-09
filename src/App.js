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
// import Home from './Home';
// import Menu from './Menu';
// import Content from './Content';
// import Contact from './Contact';
// import Header from './Header';

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
//         <Content />
//         <div
//           style={{
//             display: 'flex',
//             flex: 1,
//           }}
//         >
//           <Menu />
//             <div style={{backgroundColor: "maroon", width: '100%'}}>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/header" element={<Header />} />
//           </Routes>
//             </div>
//         </div>
//       </div>
//     </Router>
//   );
// }
