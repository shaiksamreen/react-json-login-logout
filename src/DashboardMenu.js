// import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Bookmark from './Bookmark.js'
import Dashboard from './Dashboard.js';
import './App.css';
import { useState } from "react";


function DashboardMenu() {
  const [showMsg, setShowMsg] = useState(false);

    const showMssg = () => {
      setShowMsg(true)
     }

    return (
    <>
    <div className="App">
    <div className="logout-style"><button onClick={showMssg} className="logout-style-button">Logout</button></div>

    {showMsg ? <div className="App-header">Logged out successfully</div> : (
    <Router>
        <div>
          <div className="navbar">
              <Link to="/" className="navbar-text">Sites Info</Link>
              <Link to="/bookmark" exact className="navbar-text">Bookmark</Link>
          </div>
    </div>
    <Routes>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/bookmark" element={<Bookmark/>}/>
    </Routes>
    </Router>
    )}
    </div>
    </>
  );
}

export default DashboardMenu;
