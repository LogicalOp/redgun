import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Learning from './pages/Learning';
import User from './pages/User';
import Profile from './pages/Profile';
import Sidebar from './components/Sidebar';
import CustomCode from './pages/CustomCode';
import Shellbar from './components/Shellbar';
import ObjectPage from './pages/ObjectPage';
import LearningJourneyDetail from './pages/LearningJourneyDetail';
import Messages from './pages/Messages';
import UserLookup from './pages/UserLookup';
import PrivateRoute from './PrivateRoute';
import 'react-multi-carousel/lib/styles.css';
import './App.css';

function App() {
  // Define sizes for sidebar and shellbar
  const sidebarWidth = '250px'; // Example width for the sidebar
  const shellbarHeight = '60px'; // Example height for the shellbar

  // Inline styles for layout
  const layoutStyles = {
    display: 'flex', // Use Flexbox for layout
    flexDirection: 'column', // Stack elements vertically
    height: '100vh', // Full height of the viewport
  };

  const contentStyles = {
    display: 'flex', // Use Flexbox for the content area
    marginLeft: 0, // Shift content to the right to make space for the sidebar
    height: `calc(100vh - ${shellbarHeight})`,
    width:"90%" // Adjust height to account for shellbar
  };
  
  const sidebarStyles = {
    display: 'flex',
    flexGrow: 0, // Prevent sidebar from growing
    flexShrink: 0, // Prevent sidebar from shrinking
    flexBasis: sidebarWidth, // Set sidebar width
  };

  return (
    <Router>
      <div className="App" style={layoutStyles}>
        <Shellbar />
        <div style={{ display: 'flex', height: '100%' }}>
          <Sidebar style={sidebarStyles} />
          <div style={contentStyles}>
            <Routes>
              <Route path="/" element={<PrivateRoute element={Home} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/customcode" element={<PrivateRoute element={CustomCode} />} />
              <Route path="/register" element={<Register />} />
              <Route path="/learning" element={<PrivateRoute element={Learning} />} />
              <Route path="/profile" element={<PrivateRoute element={Profile} />} />
              <Route path="/user" element={<PrivateRoute element={UserLookup} />} />
              <Route path="/user/:id" element={<PrivateRoute element={User} />} />
              <Route path="/issue/:id" element={<PrivateRoute element={ObjectPage} />} />
              <Route path="/journey/:id" element={<PrivateRoute element={LearningJourneyDetail} />} />
              <Route path="/messages" element={<PrivateRoute element={Messages} />} />
              <Route path="/messages/:userId" element={<PrivateRoute element={Messages} />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;