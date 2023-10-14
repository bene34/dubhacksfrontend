import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Contact from './Components/Contact';
import About from './Components/About';



function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav> */}

        <Routes>
          <Route path="/about" element = {<About />}>
          </Route>
          <Route path="/contact" element = {<Contact />}>
          </Route>
          <Route path="/" element = {<Dashboard />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
