import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import HomePage from './components/HomePage';
import Profile from './components/Profile';
import ProfilePhotos from './components/ProfilePhotos'; // Import ProfilePhotos component
import ProfileFriends  from "./components/ProfileFriends";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/register" element={<RegistrationForm />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/profile" element={<Profile />} />
                {/* Add route for ProfilePhotos */}
                <Route path="/profilephotos" element={<ProfilePhotos />} />
                <Route path="/profilefriends" element={<ProfileFriends />} />
            </Routes>
        </Router>
    );
}

export default App;

