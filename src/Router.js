// Router.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './NavBar';
import HomePage from "./HomePage";
import MenuPage from "./MenuPage";
import AboutPage from "./About";
import ContactPage from "./Contact";

function Routess() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </Router>
    );
}

export default Routess;
