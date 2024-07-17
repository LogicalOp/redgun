import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Learning from './pages/Learning';
import Course from './pages/Course';
import User from './pages/User';
import Profile from './pages/Profile';
import Sidebar from './components/Sidebar';
import CustomCode from './pages/CustomCode';
import Shellbar from './components/Shellbar';
import ObjectPage from './pages/ObjectPage';
import LearningJourneyDetail from './pages/LearningJourneyDetail';
import './App.css';

function App() {
  // Inline styles for layout
  const layoutStyles = {
    display: 'flex', // Use Flexbox for layout
    flexDirection: 'column', // Stack elements vertically
    height: '100vh', // Full height of the viewport
  };

  const contentStyles = {
    display: 'flex', // Use Flexbox for the content area
  };

  // Adjusted styles for Sidebar to remove shadow
  const sidebarStyle = {
    boxShadow: 'none', // Remove shadow
    // Add any other necessary styles for the sidebar here
  };

  return (
    <Router>
      <div className="App" style={layoutStyles}>
        <Shellbar />
        <div style={contentStyles}>
          <div style={sidebarStyle}><Sidebar /></div> {/* Apply the adjusted styles here */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/customcode" element={<CustomCode />} />
            // The rest of your routes
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
