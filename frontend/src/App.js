import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Learning from './pages/Learning';
import Course from './pages/Course';
import Test from './pages/Test';
import User from './pages/User';
import Profile from './pages/Profile';
import Sidebar from './components/Sidebar';
import Shellbar from './components/Shellbar';
import './App.css';

// test data
const user = {
  name: 'Annie',
  role: 'Software Engineer',
  email: 'john.doe@test.com',
  phone: '+353 87 123 4567',
  manager: {
      name: 'Jane Doe',
      phone: '+353 87 765 4321',
      email: 'jane.doe@test.com'
  },
  mentoringData: {
      people: ["Jane Doe", "John Smith", "Jane Smith"],
      totalHelped: 10,
  },
  learningData: {
      courses: ['ABAP Cloud Developer', 'CAP for NodeJS'], 
      progress: 50
  },
  menteeData: [
      { name: 'John Smith', info: ['Helpful', 'Responsive', 'Knowledgeable'], rating: 4 },
      { name: 'Jane Smith', info: ['Informative', 'Friendly', 'Professional'], rating: 5 },
      { info: ['Fast Replies', 'Efficient', 'Patient'], rating: 3 }, // Anon mentee
  ],
};

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
        <Route path="/profile" element={<Profile />} />
        <Route path="/test" element={<Test />} />
        <Route path="/user" element={<User user={user} />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
