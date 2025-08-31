import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Landing from "./pages/Landing.jsx";
import Home from "./pages/Home.jsx";
import Story from "./pages/Story.jsx";
import Toggle from "./pages/Toggle.jsx";
import Shop from "./pages/Shop.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Checkout from "./pages/Checkout.jsx";
import Successfullyreg from "./pages/Successfullyreg.jsx";

const App = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration in ms
            once: true,     // animate only once when element enters viewport
            easing: "ease-out", // easing type
        });
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/home" element={<Home />} />
                <Route path="/story" element={<Story />} />
                <Route path="/toggle" element={<Toggle />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/successfullyreg" element={<Successfullyreg />} />
            </Routes>
        </Router>
    );
};

export default App;
