import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Learning from './pages/Learning';
import Course from './pages/Course';
import Sidebar from './components/Sidebar';
import Shellbar from './components/Shellbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Shellbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/course" element={<Course />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
