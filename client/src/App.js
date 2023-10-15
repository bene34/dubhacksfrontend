import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import CreateForm from './Components/CreateForm';
import About from './Components/About';
import Settings from './Components/Settings';
import Invite from './Components/Invite';



function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element = {<Dashboard />}></Route>
          <Route path="/createform" element = {<CreateForm />}></Route>
          <Route path="/about" element = {<Dashboard />}></Route>
          <Route path="/settings" element = {<Settings />}></Route>
          <Route path="/invite" element = {<Invite />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
