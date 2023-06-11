// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           hi
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;


//
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//
// // Your page components
// import HomePage from './HomePage';
// import MenuPage from './MenuPage';
// import AboutPage from './About';
// import ContactPage from './Contact';
//
// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<HomePage />} />
//                 <Route path="/menu" element={<MenuPage />} />
//                 <Route path="/about" element={<AboutPage />} />
//                 <Route path="/contact" element={<ContactPage />} />
//             </Routes>
//         </Router>
//     );
// }
//
// export default App;

// App.js
import React from 'react';
import Routess from './Router';

function App() {
    return (
        <div className="App">
            <Routess />
        </div>
    );
}

export default App;



