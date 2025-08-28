import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from "./pages/Landing.jsx";
import Home from "./pages/Home.jsx";
import Story from "./pages/Story.jsx";
import Toggle from "./pages/Toggle.jsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/home" element={<Home />} />
                <Route path="/story" element={<Story />} />
                <Route path="/toggle" element={<Toggle />} />
            </Routes>
        </Router>
    )
}
export default App
